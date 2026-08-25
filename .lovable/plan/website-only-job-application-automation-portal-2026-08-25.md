# Website-Only Job Application Automation Portal

A single web app that owns rules, scheduling, hosted browser automation, application tracking, Gmail matching, Calendar updates, and Notion summaries — without requiring your local Python app.

## Important feasibility note

A website cannot directly “take over Chrome” the way your Python app does. The practical website-only option is to run browser automation through a hosted browser/automation provider. The portal starts the run, the hosted worker opens remote browser sessions, logs into job portals, searches jobs, fills forms, applies, and sends every result back to the portal.

This is technically possible, but more fragile than local Chrome because LinkedIn, Naukri, and similar platforms aggressively detect automation. The app must support checkpoints where you may need to complete login, CAPTCHA, OTP, or review risky applications before final submit.

```text
[ Web Portal ]
  rules, caps, dashboard, schedule
  Start run / daily run
        │
        ▼
[ Hosted Browser Worker ]
  opens remote browser
  searches 5 platforms
  fills forms and applies
  handles screenshots + logs
        │
        ▼
[ Portal Database ]
  applications, statuses, logs, errors
        │
        ├── Gmail matching
        ├── Calendar events
        └── Notion applications + summary
```

## Recommended website-only architecture

### 1. Portal as the control center
- Dashboard with today’s run, total applied, platform progress, replies, interviews, failures, and pending manual actions.
- Rule builder for 5 platforms: platform enabled, per-run cap, keywords, locations, experience, salary, remote/hybrid, excluded companies, and job age.
- Answer bank for form questions: notice period, CTC, expected CTC, relocation, visa, years of experience per skill, cover letter templates, custom Q&A.
- Resume/profile storage for data the automation needs to fill forms.

### 2. Hosted browser automation
- Add a server-side automation worker that uses a hosted browser provider such as Apify, Browserless, Browserbase, or a similar managed browser service.
- The portal triggers the worker with a rules snapshot and run ID.
- Worker visits each platform, applies filters, scans jobs, skips duplicates, fills applications, answers questions from the answer bank, and submits where confidence is high.
- Every action writes logs, screenshots, job URLs, applied/skipped/failed status, and extracted job details back to the portal.

### 3. Login and human checkpoints
- Store platform credentials securely as secrets only if you explicitly choose that path.
- Preferred safer flow: the hosted browser opens an interactive login session when needed, and you complete OTP/CAPTCHA manually.
- If an application asks unknown questions, salary-sensitive answers, file uploads, or suspicious external forms, it pauses into a “Review needed” queue.
- Manual review page shows screenshot, job details, detected questions, suggested answers, and a button to approve/skip.

### 4. Application tracking
- Every job is stored with platform, company, role, location, URL, salary, applied time, status, form questions/answers, screenshots, and error details.
- Status pipeline: Found → Skipped → Applied → Replied → Interview → Offer → Rejected.
- Duplicate prevention by platform + job URL/company/role.
- Filters by platform, company, status, date, keyword, and confidence.

### 5. Gmail, Calendar, and Notion automation
- Gmail: reads recent job-related emails, classifies replies/rejections/interview/assessment messages, and matches them to applications.
- Calendar: creates interview/assessment events and follow-up reminders.
- Notion: creates/updates application rows and updates a summary table after each run.
- Low-confidence email matches go to review instead of being written automatically.

### 6. Scheduler
- Manual **Start run** button.
- Daily schedule with selected time, weekdays, platform order, and max applications per platform.
- Single-flight locking so two runs cannot apply to the same jobs at the same time.
- Bounded work per run: exactly 5 platforms with configured caps, then stop.

## What must be connected

### Hosted browser provider
Needed because the website cannot run real Chrome by itself.

Recommended first choice: **Apify** if we can use existing actors or build custom actors for the job boards. Alternative: Browserbase/Browserless with custom Playwright scripts.

### Lovable Cloud
Needed for login, secure database, run history, scheduler state, logs, applications, and encrypted connector state.

### Google Gmail + Calendar
Needed for email tracking and calendar automation.

### Notion
Needed for applications database and summary updates.

## Technical plan

### Database
Create tables for:
- `profiles`
- `platform_rules`
- `answer_bank`
- `resumes`
- `runs`
- `run_platform_stats`
- `applications`
- `application_questions`
- `run_logs`
- `automation_checkpoints`
- `email_matches`
- `calendar_events`
- `notion_sync_runs`
- `schedules`
- `job_locks`
- `integration_status`

All user data is scoped to the signed-in user with row-level security.

### Server functions and routes
- Authenticated server functions for dashboard, rules, runs, applications, answer bank, and settings.
- Public-but-signed automation callback endpoints for hosted browser workers:
  - `POST /api/public/automation/run-started`
  - `POST /api/public/automation/log`
  - `POST /api/public/automation/application`
  - `POST /api/public/automation/checkpoint`
  - `POST /api/public/automation/run-complete`
- Signed scheduler endpoint for daily run enqueueing.
- All public endpoints verify HMAC/signature tokens before writing anything.

### Automation runner
- Server starts a hosted browser job with run ID, rules snapshot, and secure callback token.
- Runner executes platform-specific scripts.
- Runner sends structured progress back to the portal.
- Runner stops at caps, duplicate jobs, platform block, CAPTCHA, unknown questions, or configured daily limit.

### AI-assisted matching and answering
- Use AI only for bounded tasks:
  - classify Gmail messages
  - match email to application
  - suggest answers for unknown screening questions
  - summarize run outcomes
- Unknown or risky answers require review before submission.

## Build order

1. Enable Lovable Cloud and build the authenticated portal shell.
2. Build database schema, dashboard, rules, answer bank, application tracker, and run pages.
3. Add manual run creation and scheduler queue.
4. Add hosted browser provider integration and callback endpoints.
5. Build first platform automation end-to-end, then expand to 5 platforms.
6. Add checkpoint/review flow for login, CAPTCHA, unknown forms, and risky submissions.
7. Add Gmail matching, Calendar event creation, and Notion sync.
8. Add monitoring: screenshots, failure reasons, retry controls, and run summary.

## Risks and controls

- **Platform blocking:** hosted browsers may be challenged or blocked. The app will surface login/CAPTCHA checkpoints instead of silently failing.
- **Terms and account safety:** some platforms restrict automated applications. The app will include caps, delays, manual review options, and clear run logs.
- **Wrong answers:** unknown or sensitive questions pause for review.
- **Duplicate applications:** database-level duplicate checks before submit.
- **Costs:** hosted browsers and AI classification may add usage cost; runs are capped and scheduled.

## First milestone

A working portal where you can:
- sign in
- configure 5 platforms
- enter job filters and answer bank
- start a run
- see live run status/logs
- track all applications
- review paused checkpoints

Then we connect the hosted browser provider and implement real platform automation one platform at a time.

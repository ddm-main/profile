# Job Application Command Center

One portal to configure rules, trigger runs, watch live progress, and track every application — with your existing Python automation as the local execution engine.

## Recommended architecture (my advice)

Your Python script must keep the browser part. The hosted app runs on a serverless edge runtime with no Chrome, no persistent process, and no way to hold your LinkedIn/Naukri sessions — and those platforms actively block cloud-hosted bots. So:

```text
[ Portal (this app) ]                      [ Your PC: Python agent ]
  rules + caps + resume answers   ──────>   polls for the next run
  "Start run" button / daily cron           drives real Chrome, applies
  live run log + dashboard        <──────   pushes每 application result
  Gmail read  -> match replies
  Calendar    -> interview events
  Notion      -> applications + summary
```

The portal owns everything except the clicking. Nothing is mocked — every row comes from a real application your agent performed. If you later want zero-local-machine runs, the same agent contract can point at a hosted browser service without changing the portal.

## What gets built

### 1. Rules & platforms
- Five platforms (LinkedIn, Naukri, Indeed, Instahyre, Hirist — editable), each with: enabled toggle, per-run application cap, keywords, locations, experience range, salary floor, remote/hybrid, exclude-company list.
- Profile & answer bank: your standard answers to screening questions (notice period, CTC, visa, relocation, years per skill) so the agent never stalls.
- Global run settings: order of platforms, delay between applications, daily total cap.

### 2. Run control
- **Start run** button — creates a queued run with a snapshot of the current rules.
- **Daily schedule** — pick time + weekdays; a scheduled job enqueues the run automatically.
- Run detail page: per-platform progress bars, live streaming log lines (searched / matched / applied / skipped + reason / question answered), pause and stop.

### 3. Applications tracker
- Every application: platform, company, role, location, salary, job URL, applied time, status, screening Q&A, error if failed.
- Filters, search, and status pipeline: Applied → Viewed → Replied → Interview → Offer → Rejected.
- Dashboard: applications per day, per platform, reply rate, interview funnel, top companies, cap usage vs target.

### 4. Post-run intelligence (runs automatically after the last platform)
- **Gmail**: reads recent mail, classifies each as reply / rejection / interview invite / assessment, and matches it to an application by company + role + timing. Unmatched mail lands in a review queue instead of being guessed.
- **Calendar**: creates events for detected interviews/assessments (with the job link in the description) and follow-up reminders for applications silent past N days.
- **Notion**: appends each application to your applications database and updates your summary table (totals per platform, replies, interviews, conversion) for the run.
- Each step reports success/failure on the run page — a failed Notion write never silently disappears.

### 5. Agent contract (what your Python app talks to)
- `GET  /api/public/agent/next-run` — claims the next queued run, returns the rules snapshot + answer bank.
- `POST /api/public/agent/log` — streams log lines and per-platform counters.
- `POST /api/public/agent/application` — one row per applied/skipped/failed job (idempotent on platform + job id).
- `POST /api/public/agent/complete` — closes the run and triggers the Gmail/Calendar/Notion phase.
- Authenticated with an agent token you generate in Settings. I'll ship a ready-to-paste Python client module so you only swap your script's storage calls for these four calls.

## Technical notes

- Lovable Cloud (Postgres + auth) for data. Tables: `profiles`, `platform_rules`, `answer_bank`, `runs`, `run_platform_stats`, `applications`, `run_logs`, `email_matches`, `calendar_events`, `notion_sync`, `agent_tokens`, `schedules`, `job_locks`. RLS on everything, scoped to your user; agent endpoints authenticate by hashed token and resolve the owning user server-side.
- Agent endpoints under `src/routes/api/public/*` (schedulers and your local script can reach these), token verified inside each handler; all app-internal reads/writes via `createServerFn`.
- Scheduling via pg_cron hitting a public enqueue endpoint. The post-run pipeline uses a single-flight lock, bounded batch size, idempotent progress marking, and pauses itself on repeated failures.
- Gmail + Calendar + Notion via Lovable's per-user connectors (you consent once from Settings; tokens stored encrypted server-side, never in the browser).
- Email classification and email→application matching use Lovable AI; unmatched or low-confidence items go to a review queue rather than writing wrong data.

## Build order

1. Cloud + schema + auth + Settings (profile, platforms, rules, answer bank, agent token).
2. Runs: create, agent endpoints, live log, run detail, dashboard, applications tracker.
3. Python client module for your script + end-to-end test with one real run.
4. Connectors: Notion sync, then Gmail matching, then Calendar events.
5. Daily scheduler + failure alerts on the dashboard.

## Out of scope

Browser automation inside the hosted app, and storing your LinkedIn/Naukri passwords in the portal — the agent keeps using your local Chrome session.

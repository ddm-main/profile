export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activity_events: {
        Row: {
          created_at: string
          detail: string | null
          entity: string | null
          entity_id: string | null
          id: string
          kind: string
          needs_attention: boolean
          occurred_at: string
          occurrence_count: number
          resolved: boolean
          run_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          detail?: string | null
          entity?: string | null
          entity_id?: string | null
          id?: string
          kind: string
          needs_attention?: boolean
          occurred_at?: string
          occurrence_count?: number
          resolved?: boolean
          run_id?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          detail?: string | null
          entity?: string | null
          entity_id?: string | null
          id?: string
          kind?: string
          needs_attention?: boolean
          occurred_at?: string
          occurrence_count?: number
          resolved?: boolean
          run_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_events_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "agent_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_actions: {
        Row: {
          action: string
          agent_id: string | null
          correlation_id: string | null
          created_at: string
          detail: string | null
          id: string
          occurred_at: string
          screenshot_path: string | null
          sequence: number
          site: string | null
          status: string
          target: string | null
          task_id: string | null
          updated_at: string
          url: string | null
          user_id: string
        }
        Insert: {
          action: string
          agent_id?: string | null
          correlation_id?: string | null
          created_at?: string
          detail?: string | null
          id?: string
          occurred_at?: string
          screenshot_path?: string | null
          sequence?: number
          site?: string | null
          status?: string
          target?: string | null
          task_id?: string | null
          updated_at?: string
          url?: string | null
          user_id: string
        }
        Update: {
          action?: string
          agent_id?: string | null
          correlation_id?: string | null
          created_at?: string
          detail?: string | null
          id?: string
          occurred_at?: string
          screenshot_path?: string | null
          sequence?: number
          site?: string | null
          status?: string
          target?: string | null
          task_id?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_actions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_actions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "automation_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_runs: {
        Row: {
          applications_queued: number
          applications_submitted: number
          created_at: string
          error: string | null
          finished_at: string | null
          id: string
          jobs_found: number
          jobs_scored: number
          responses_processed: number
          run_code: string | null
          session_state: string | null
          started_at: string
          status: string
          summary: string | null
          task_seq: number
          trigger: string
          updated_at: string
          user_id: string
        }
        Insert: {
          applications_queued?: number
          applications_submitted?: number
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          jobs_found?: number
          jobs_scored?: number
          responses_processed?: number
          run_code?: string | null
          session_state?: string | null
          started_at?: string
          status?: string
          summary?: string | null
          task_seq?: number
          trigger?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          applications_queued?: number
          applications_submitted?: number
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          jobs_found?: number
          jobs_scored?: number
          responses_processed?: number
          run_code?: string | null
          session_state?: string | null
          started_at?: string
          status?: string
          summary?: string | null
          task_seq?: number
          trigger?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      agent_state: {
        Row: {
          config_revision: number
          config_revision_at: string | null
          created_at: string
          extension_id: string | null
          extension_last_seen: string | null
          extension_version: string | null
          last_run_at: string | null
          last_run_id: string | null
          lease_until: string | null
          pause_reason: string | null
          paused: boolean
          paused_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          config_revision?: number
          config_revision_at?: string | null
          created_at?: string
          extension_id?: string | null
          extension_last_seen?: string | null
          extension_version?: string | null
          last_run_at?: string | null
          last_run_id?: string | null
          lease_until?: string | null
          pause_reason?: string | null
          paused?: boolean
          paused_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          config_revision?: number
          config_revision_at?: string | null
          created_at?: string
          extension_id?: string | null
          extension_last_seen?: string | null
          extension_version?: string | null
          last_run_at?: string | null
          last_run_id?: string | null
          lease_until?: string | null
          pause_reason?: string | null
          paused?: boolean
          paused_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      agent_tokens: {
        Row: {
          created_at: string
          id: string
          last_used_at: string | null
          name: string
          revoked: boolean
          token_hash: string
          token_prefix: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_used_at?: string | null
          name?: string
          revoked?: boolean
          token_hash: string
          token_prefix: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_used_at?: string | null
          name?: string
          revoked?: boolean
          token_hash?: string
          token_prefix?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      agents: {
        Row: {
          created_at: string
          current_task_id: string | null
          hostname: string | null
          id: string
          last_analysis_at: string | null
          last_application_at: string | null
          last_error: string | null
          last_heartbeat: string | null
          last_scan_at: string | null
          name: string
          status: string
          updated_at: string
          user_id: string
          version: string | null
        }
        Insert: {
          created_at?: string
          current_task_id?: string | null
          hostname?: string | null
          id?: string
          last_analysis_at?: string | null
          last_application_at?: string | null
          last_error?: string | null
          last_heartbeat?: string | null
          last_scan_at?: string | null
          name?: string
          status?: string
          updated_at?: string
          user_id: string
          version?: string | null
        }
        Update: {
          created_at?: string
          current_task_id?: string | null
          hostname?: string | null
          id?: string
          last_analysis_at?: string | null
          last_application_at?: string | null
          last_error?: string | null
          last_heartbeat?: string | null
          last_scan_at?: string | null
          name?: string
          status?: string
          updated_at?: string
          user_id?: string
          version?: string | null
        }
        Relationships: []
      }
      application_answers: {
        Row: {
          answer: string
          application_id: string
          approved: boolean
          created_at: string
          id: string
          question: string
          question_normalized: string | null
          source: string
          updated_at: string
          user_id: string
        }
        Insert: {
          answer: string
          application_id: string
          approved?: boolean
          created_at?: string
          id?: string
          question: string
          question_normalized?: string | null
          source?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          answer?: string
          application_id?: string
          approved?: boolean
          created_at?: string
          id?: string
          question?: string
          question_normalized?: string | null
          source?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_answers_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      application_events: {
        Row: {
          actor: string
          application_id: string | null
          created_at: string
          detail: string | null
          event: string
          id: string
          job_id: string | null
          occurred_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          actor?: string
          application_id?: string | null
          created_at?: string
          detail?: string | null
          event: string
          id?: string
          job_id?: string | null
          occurred_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          actor?: string
          application_id?: string | null
          created_at?: string
          detail?: string | null
          event?: string
          id?: string
          job_id?: string | null
          occurred_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_events_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_events_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      application_questions: {
        Row: {
          answer: string
          category: string
          company: string | null
          created_at: string
          id: string
          question: string
          question_normalized: string | null
          source_application_id: string | null
          updated_at: string
          user_id: string
          verified: boolean
        }
        Insert: {
          answer: string
          category?: string
          company?: string | null
          created_at?: string
          id?: string
          question: string
          question_normalized?: string | null
          source_application_id?: string | null
          updated_at?: string
          user_id: string
          verified?: boolean
        }
        Update: {
          answer?: string
          category?: string
          company?: string | null
          created_at?: string
          id?: string
          question?: string
          question_normalized?: string | null
          source_application_id?: string | null
          updated_at?: string
          user_id?: string
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "application_questions_source_application_id_fkey"
            columns: ["source_application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      application_steps: {
        Row: {
          action: string | null
          application_id: string | null
          attempt: number
          capture_id: string | null
          capture_method: string | null
          correlation_id: string | null
          created_at: string
          detail: string | null
          detected_controls: Json
          duration_ms: number | null
          error_class: string | null
          expected_state: string | null
          filled_count: number
          id: string
          job_id: string | null
          label: string | null
          occurred_at: string
          platform: string | null
          questions: Json
          retry_count: number
          screenshot_missing_reason: string | null
          screenshot_path: string | null
          site: string | null
          state: string | null
          status: string
          step_index: number
          task_id: string | null
          transition: string | null
          updated_at: string
          url: string | null
          user_id: string
          verified: boolean
        }
        Insert: {
          action?: string | null
          application_id?: string | null
          attempt?: number
          capture_id?: string | null
          capture_method?: string | null
          correlation_id?: string | null
          created_at?: string
          detail?: string | null
          detected_controls?: Json
          duration_ms?: number | null
          error_class?: string | null
          expected_state?: string | null
          filled_count?: number
          id?: string
          job_id?: string | null
          label?: string | null
          occurred_at?: string
          platform?: string | null
          questions?: Json
          retry_count?: number
          screenshot_missing_reason?: string | null
          screenshot_path?: string | null
          site?: string | null
          state?: string | null
          status?: string
          step_index?: number
          task_id?: string | null
          transition?: string | null
          updated_at?: string
          url?: string | null
          user_id: string
          verified?: boolean
        }
        Update: {
          action?: string | null
          application_id?: string | null
          attempt?: number
          capture_id?: string | null
          capture_method?: string | null
          correlation_id?: string | null
          created_at?: string
          detail?: string | null
          detected_controls?: Json
          duration_ms?: number | null
          error_class?: string | null
          expected_state?: string | null
          filled_count?: number
          id?: string
          job_id?: string | null
          label?: string | null
          occurred_at?: string
          platform?: string | null
          questions?: Json
          retry_count?: number
          screenshot_missing_reason?: string | null
          screenshot_path?: string | null
          site?: string | null
          state?: string | null
          status?: string
          step_index?: number
          task_id?: string | null
          transition?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "application_steps_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_steps_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          applied_at: string | null
          company: string | null
          correlation_id: string | null
          cover_letter_id: string | null
          created_at: string
          duplicate_override: boolean
          evidence_path: string | null
          failure_reason: string | null
          id: string
          jd_snapshot: string | null
          job_id: string | null
          job_title: string | null
          job_url: string | null
          lifecycle_changed_at: string
          lifecycle_state: string
          manual_reason: string | null
          match_reasons: Json
          match_verdict: string | null
          next_follow_up: string | null
          normalized_job_url: string | null
          notes: string | null
          pipeline_stage: string | null
          portal_status: string | null
          recruiter_email: string | null
          recruiter_linkedin: string | null
          recruiter_name: string | null
          resume_id: string | null
          run_id: string | null
          search_city: string | null
          search_role: string | null
          search_work_mode: string | null
          source_slug: string | null
          status: string
          submission_result: string | null
          task_code: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          applied_at?: string | null
          company?: string | null
          correlation_id?: string | null
          cover_letter_id?: string | null
          created_at?: string
          duplicate_override?: boolean
          evidence_path?: string | null
          failure_reason?: string | null
          id?: string
          jd_snapshot?: string | null
          job_id?: string | null
          job_title?: string | null
          job_url?: string | null
          lifecycle_changed_at?: string
          lifecycle_state?: string
          manual_reason?: string | null
          match_reasons?: Json
          match_verdict?: string | null
          next_follow_up?: string | null
          normalized_job_url?: string | null
          notes?: string | null
          pipeline_stage?: string | null
          portal_status?: string | null
          recruiter_email?: string | null
          recruiter_linkedin?: string | null
          recruiter_name?: string | null
          resume_id?: string | null
          run_id?: string | null
          search_city?: string | null
          search_role?: string | null
          search_work_mode?: string | null
          source_slug?: string | null
          status?: string
          submission_result?: string | null
          task_code?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          applied_at?: string | null
          company?: string | null
          correlation_id?: string | null
          cover_letter_id?: string | null
          created_at?: string
          duplicate_override?: boolean
          evidence_path?: string | null
          failure_reason?: string | null
          id?: string
          jd_snapshot?: string | null
          job_id?: string | null
          job_title?: string | null
          job_url?: string | null
          lifecycle_changed_at?: string
          lifecycle_state?: string
          manual_reason?: string | null
          match_reasons?: Json
          match_verdict?: string | null
          next_follow_up?: string | null
          normalized_job_url?: string | null
          notes?: string | null
          pipeline_stage?: string | null
          portal_status?: string | null
          recruiter_email?: string | null
          recruiter_linkedin?: string | null
          recruiter_name?: string | null
          resume_id?: string | null
          run_id?: string | null
          search_city?: string | null
          search_role?: string | null
          search_work_mode?: string | null
          source_slug?: string | null
          status?: string
          submission_result?: string | null
          task_code?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_cover_letter_id_fkey"
            columns: ["cover_letter_id"]
            isOneToOne: false
            referencedRelation: "cover_letters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "agent_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          created_at: string
          detail: Json
          entity: string | null
          entity_id: string | null
          event: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          detail?: Json
          entity?: string | null
          entity_id?: string | null
          event: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          detail?: Json
          entity?: string | null
          entity_id?: string | null
          event?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      automation_logs: {
        Row: {
          agent_id: string | null
          context: Json
          created_at: string
          id: string
          level: string
          message: string
          task_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          context?: Json
          created_at?: string
          id?: string
          level?: string
          message: string
          task_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          agent_id?: string | null
          context?: Json
          created_at?: string
          id?: string
          level?: string
          message?: string
          task_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_logs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_logs_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "automation_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_tasks: {
        Row: {
          agent_id: string | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          last_error: string | null
          max_retries: number
          payload: Json
          preferences_snapshot: Json | null
          priority: number
          result: Json | null
          retry_count: number
          run_id: string | null
          snapshot_revision: number | null
          started_at: string | null
          status: string
          task_code: string | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          last_error?: string | null
          max_retries?: number
          payload?: Json
          preferences_snapshot?: Json | null
          priority?: number
          result?: Json | null
          retry_count?: number
          run_id?: string | null
          snapshot_revision?: number | null
          started_at?: string | null
          status?: string
          task_code?: string | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          agent_id?: string | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          last_error?: string | null
          max_retries?: number
          payload?: Json
          preferences_snapshot?: Json | null
          priority?: number
          result?: Json | null
          retry_count?: number
          run_id?: string | null
          snapshot_revision?: number | null
          started_at?: string | null
          status?: string
          task_code?: string | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_tasks_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_tasks_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "agent_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      blocked_companies: {
        Row: {
          created_at: string
          id: string
          name: string
          normalized_name: string
          reason: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          normalized_name: string
          reason?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          normalized_name?: string
          reason?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      candidate_skills: {
        Row: {
          created_at: string
          id: string
          required: boolean
          skill: string
          updated_at: string
          user_id: string
          years_experience: number
        }
        Insert: {
          created_at?: string
          id?: string
          required?: boolean
          skill: string
          updated_at?: string
          user_id: string
          years_experience?: number
        }
        Update: {
          created_at?: string
          id?: string
          required?: boolean
          skill?: string
          updated_at?: string
          user_id?: string
          years_experience?: number
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string
          id: string
          industry: string | null
          name: string
          normalized_name: string
          notes: string | null
          updated_at: string
          user_id: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          industry?: string | null
          name: string
          normalized_name: string
          notes?: string | null
          updated_at?: string
          user_id: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          industry?: string | null
          name?: string
          normalized_name?: string
          notes?: string | null
          updated_at?: string
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      cover_letters: {
        Row: {
          application_id: string | null
          approved: boolean
          content: string
          created_at: string
          id: string
          job_id: string | null
          model: string | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_id?: string | null
          approved?: boolean
          content: string
          created_at?: string
          id?: string
          job_id?: string | null
          model?: string | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_id?: string | null
          approved?: boolean
          content?: string
          created_at?: string
          id?: string
          job_id?: string | null
          model?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cover_letters_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_digests: {
        Row: {
          created_at: string
          digest_date: string
          id: string
          stats: Json
          summary: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          digest_date?: string
          id?: string
          stats?: Json
          summary?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          digest_date?: string
          id?: string
          stats?: Json
          summary?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      email_events: {
        Row: {
          application_id: string | null
          classification: string
          confidence: number
          created_at: string
          from_address: string | null
          id: string
          processed: boolean
          provider: string
          provider_message_id: string
          received_at: string | null
          snippet: string | null
          subject: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_id?: string | null
          classification?: string
          confidence?: number
          created_at?: string
          from_address?: string | null
          id?: string
          processed?: boolean
          provider?: string
          provider_message_id: string
          received_at?: string | null
          snippet?: string | null
          subject?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_id?: string | null
          classification?: string
          confidence?: number
          created_at?: string
          from_address?: string | null
          id?: string
          processed?: boolean
          provider?: string
          provider_message_id?: string
          received_at?: string | null
          snippet?: string | null
          subject?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_events_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      follow_ups: {
        Row: {
          application_id: string | null
          completed: boolean
          created_at: string
          due_date: string
          follow_up_type: string
          id: string
          notes: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_id?: string | null
          completed?: boolean
          created_at?: string
          due_date: string
          follow_up_type?: string
          id?: string
          notes?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_id?: string | null
          completed?: boolean
          created_at?: string
          due_date?: string
          follow_up_type?: string
          id?: string
          notes?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follow_ups_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      interviews: {
        Row: {
          application_id: string | null
          company: string | null
          created_at: string
          id: string
          interview_type: string | null
          interviewer: string | null
          job_title: string | null
          meeting_url: string | null
          next_step: string | null
          notes: string | null
          result: string | null
          round: number
          scheduled_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          application_id?: string | null
          company?: string | null
          created_at?: string
          id?: string
          interview_type?: string | null
          interviewer?: string | null
          job_title?: string | null
          meeting_url?: string | null
          next_step?: string | null
          notes?: string | null
          result?: string | null
          round?: number
          scheduled_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          application_id?: string | null
          company?: string | null
          created_at?: string
          id?: string
          interview_type?: string | null
          interviewer?: string | null
          job_title?: string | null
          meeting_url?: string | null
          next_step?: string | null
          notes?: string | null
          result?: string | null
          round?: number
          scheduled_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interviews_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      job_matches: {
        Row: {
          analyzed_at: string | null
          cloud_score: number
          concerns: string[]
          created_at: string
          experience_score: number
          id: string
          industry_score: number
          job_id: string
          location_score: number
          management_score: number
          manual_override: string | null
          matching_skills: string[]
          missing_skills: string[]
          model: string | null
          overall_score: number
          reason: string | null
          recommendation: string
          score_breakdown: Json
          search_profile_id: string | null
          security_score: number
          technical_score: number
          title_score: number
          updated_at: string
          user_id: string
        }
        Insert: {
          analyzed_at?: string | null
          cloud_score?: number
          concerns?: string[]
          created_at?: string
          experience_score?: number
          id?: string
          industry_score?: number
          job_id: string
          location_score?: number
          management_score?: number
          manual_override?: string | null
          matching_skills?: string[]
          missing_skills?: string[]
          model?: string | null
          overall_score?: number
          reason?: string | null
          recommendation?: string
          score_breakdown?: Json
          search_profile_id?: string | null
          security_score?: number
          technical_score?: number
          title_score?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          analyzed_at?: string | null
          cloud_score?: number
          concerns?: string[]
          created_at?: string
          experience_score?: number
          id?: string
          industry_score?: number
          job_id?: string
          location_score?: number
          management_score?: number
          manual_override?: string | null
          matching_skills?: string[]
          missing_skills?: string[]
          model?: string | null
          overall_score?: number
          reason?: string | null
          recommendation?: string
          score_breakdown?: Json
          search_profile_id?: string | null
          security_score?: number
          technical_score?: number
          title_score?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_matches_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: true
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_matches_search_profile_id_fkey"
            columns: ["search_profile_id"]
            isOneToOne: false
            referencedRelation: "search_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      job_preferences: {
        Row: {
          ai_temperature: number
          apply_threshold: number
          auto_apply: boolean
          auto_generate_answers: boolean
          auto_generate_cover_letters: boolean
          auto_submit: boolean
          consider_threshold: number
          created_at: string
          daily_scan_enabled: boolean
          dry_run: boolean
          employment_types: string[]
          excluded_keywords: string[]
          follow_up_after_days: number
          follow_up_enabled: boolean
          id: string
          inbox_check_enabled: boolean
          inbox_provider: string
          job_expiry_days: number
          max_applications_per_day: number
          max_experience: number | null
          max_jobs_per_batch: number
          max_jobs_per_day: number
          min_experience: number
          min_salary: number | null
          ollama_base_url: string
          ollama_model: string
          preferred_industries: string[]
          preferred_skills: string[]
          remote_preference: string
          require_approval: boolean
          required_skills: string[]
          review_threshold: number
          scan_days: number[]
          scan_time: string
          status_check_enabled: boolean
          target_locations: string[]
          target_titles: string[]
          updated_at: string
          use_local_llm_fallback: boolean
          user_id: string
          weights: Json
          work_modes: string[]
        }
        Insert: {
          ai_temperature?: number
          apply_threshold?: number
          auto_apply?: boolean
          auto_generate_answers?: boolean
          auto_generate_cover_letters?: boolean
          auto_submit?: boolean
          consider_threshold?: number
          created_at?: string
          daily_scan_enabled?: boolean
          dry_run?: boolean
          employment_types?: string[]
          excluded_keywords?: string[]
          follow_up_after_days?: number
          follow_up_enabled?: boolean
          id?: string
          inbox_check_enabled?: boolean
          inbox_provider?: string
          job_expiry_days?: number
          max_applications_per_day?: number
          max_experience?: number | null
          max_jobs_per_batch?: number
          max_jobs_per_day?: number
          min_experience?: number
          min_salary?: number | null
          ollama_base_url?: string
          ollama_model?: string
          preferred_industries?: string[]
          preferred_skills?: string[]
          remote_preference?: string
          require_approval?: boolean
          required_skills?: string[]
          review_threshold?: number
          scan_days?: number[]
          scan_time?: string
          status_check_enabled?: boolean
          target_locations?: string[]
          target_titles?: string[]
          updated_at?: string
          use_local_llm_fallback?: boolean
          user_id: string
          weights?: Json
          work_modes?: string[]
        }
        Update: {
          ai_temperature?: number
          apply_threshold?: number
          auto_apply?: boolean
          auto_generate_answers?: boolean
          auto_generate_cover_letters?: boolean
          auto_submit?: boolean
          consider_threshold?: number
          created_at?: string
          daily_scan_enabled?: boolean
          dry_run?: boolean
          employment_types?: string[]
          excluded_keywords?: string[]
          follow_up_after_days?: number
          follow_up_enabled?: boolean
          id?: string
          inbox_check_enabled?: boolean
          inbox_provider?: string
          job_expiry_days?: number
          max_applications_per_day?: number
          max_experience?: number | null
          max_jobs_per_batch?: number
          max_jobs_per_day?: number
          min_experience?: number
          min_salary?: number | null
          ollama_base_url?: string
          ollama_model?: string
          preferred_industries?: string[]
          preferred_skills?: string[]
          remote_preference?: string
          require_approval?: boolean
          required_skills?: string[]
          review_threshold?: number
          scan_days?: number[]
          scan_time?: string
          status_check_enabled?: boolean
          target_locations?: string[]
          target_titles?: string[]
          updated_at?: string
          use_local_llm_fallback?: boolean
          user_id?: string
          weights?: Json
          work_modes?: string[]
        }
        Relationships: []
      }
      job_source_links: {
        Row: {
          created_at: string
          id: string
          job_id: string
          source_job_id: string | null
          source_slug: string
          updated_at: string
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id: string
          source_job_id?: string | null
          source_slug: string
          updated_at?: string
          url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string
          source_job_id?: string | null
          source_slug?: string
          updated_at?: string
          url?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_source_links_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_sources: {
        Row: {
          collection_mode: string
          created_at: string
          current_run_id: string | null
          enabled: boolean
          id: string
          jobs_found: number
          jobs_processed_in_lock: number
          jobs_processed_this_run: number
          last_error: string | null
          last_scan_at: string | null
          last_success_at: string | null
          locked_at: string | null
          locked_city: string | null
          locked_role: string | null
          locked_work_mode: string | null
          max_applications_per_run: number
          name: string
          slug: string
          status: string
          updated_at: string
          user_id: string
          website: string | null
        }
        Insert: {
          collection_mode?: string
          created_at?: string
          current_run_id?: string | null
          enabled?: boolean
          id?: string
          jobs_found?: number
          jobs_processed_in_lock?: number
          jobs_processed_this_run?: number
          last_error?: string | null
          last_scan_at?: string | null
          last_success_at?: string | null
          locked_at?: string | null
          locked_city?: string | null
          locked_role?: string | null
          locked_work_mode?: string | null
          max_applications_per_run?: number
          name: string
          slug: string
          status?: string
          updated_at?: string
          user_id: string
          website?: string | null
        }
        Update: {
          collection_mode?: string
          created_at?: string
          current_run_id?: string | null
          enabled?: boolean
          id?: string
          jobs_found?: number
          jobs_processed_in_lock?: number
          jobs_processed_this_run?: number
          last_error?: string | null
          last_scan_at?: string | null
          last_success_at?: string | null
          locked_at?: string | null
          locked_city?: string | null
          locked_role?: string | null
          locked_work_mode?: string | null
          max_applications_per_run?: number
          name?: string
          slug?: string
          status?: string
          updated_at?: string
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          company: string | null
          company_id: string | null
          correlation_id: string | null
          created_at: string
          description: string | null
          description_raw: string | null
          easy_apply: boolean
          employment_type: string | null
          experience_text: string | null
          expires_at: string | null
          fingerprint: string
          id: string
          is_demo: boolean
          jd_captured_at: string | null
          location: string | null
          min_experience: number | null
          min_salary: number | null
          normalized_url: string | null
          posted_at: string | null
          qualifications: string | null
          requirements: string | null
          responsibilities: string | null
          salary_text: string | null
          search_city: string | null
          search_role: string | null
          search_work_mode: string | null
          skills: string[]
          source_job_id: string | null
          source_slug: string
          status: string
          title: string
          updated_at: string
          url: string | null
          user_id: string
          work_mode: string | null
        }
        Insert: {
          company?: string | null
          company_id?: string | null
          correlation_id?: string | null
          created_at?: string
          description?: string | null
          description_raw?: string | null
          easy_apply?: boolean
          employment_type?: string | null
          experience_text?: string | null
          expires_at?: string | null
          fingerprint: string
          id?: string
          is_demo?: boolean
          jd_captured_at?: string | null
          location?: string | null
          min_experience?: number | null
          min_salary?: number | null
          normalized_url?: string | null
          posted_at?: string | null
          qualifications?: string | null
          requirements?: string | null
          responsibilities?: string | null
          salary_text?: string | null
          search_city?: string | null
          search_role?: string | null
          search_work_mode?: string | null
          skills?: string[]
          source_job_id?: string | null
          source_slug: string
          status?: string
          title: string
          updated_at?: string
          url?: string | null
          user_id: string
          work_mode?: string | null
        }
        Update: {
          company?: string | null
          company_id?: string | null
          correlation_id?: string | null
          created_at?: string
          description?: string | null
          description_raw?: string | null
          easy_apply?: boolean
          employment_type?: string | null
          experience_text?: string | null
          expires_at?: string | null
          fingerprint?: string
          id?: string
          is_demo?: boolean
          jd_captured_at?: string | null
          location?: string | null
          min_experience?: number | null
          min_salary?: number | null
          normalized_url?: string | null
          posted_at?: string | null
          qualifications?: string | null
          requirements?: string | null
          responsibilities?: string | null
          salary_text?: string | null
          search_city?: string | null
          search_role?: string | null
          search_work_mode?: string | null
          skills?: string[]
          source_job_id?: string | null
          source_slug?: string
          status?: string
          title?: string
          updated_at?: string
          url?: string | null
          user_id?: string
          work_mode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_settings: {
        Row: {
          created_at: string
          id: string
          in_app_enabled: boolean
          type_settings: Json
          updated_at: string
          user_id: string
          whatsapp_enabled: boolean
          whatsapp_number: string | null
          whatsapp_provider: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          in_app_enabled?: boolean
          type_settings?: Json
          updated_at?: string
          user_id: string
          whatsapp_enabled?: boolean
          whatsapp_number?: string | null
          whatsapp_provider?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          in_app_enabled?: boolean
          type_settings?: Json
          updated_at?: string
          user_id?: string
          whatsapp_enabled?: boolean
          whatsapp_number?: string | null
          whatsapp_provider?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          body: string | null
          channel: string
          created_at: string
          id: string
          is_read: boolean
          sent_at: string | null
          title: string
          type: string
          updated_at: string
          url: string | null
          user_id: string
        }
        Insert: {
          body?: string | null
          channel?: string
          created_at?: string
          id?: string
          is_read?: boolean
          sent_at?: string | null
          title: string
          type?: string
          updated_at?: string
          url?: string | null
          user_id: string
        }
        Update: {
          body?: string | null
          channel?: string
          created_at?: string
          id?: string
          is_read?: boolean
          sent_at?: string | null
          title?: string
          type?: string
          updated_at?: string
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          certifications: Json
          cloud_experience: string | null
          created_at: string
          current_company: string | null
          current_location: string | null
          current_salary: number | null
          current_title: string | null
          education: Json
          email: string | null
          expected_salary: number | null
          full_name: string | null
          github_url: string | null
          id: string
          industries: string[]
          linkedin_url: string | null
          management_experience: string | null
          notice_period: string | null
          phone: string | null
          portfolio_url: string | null
          preferred_locations: string[]
          security_experience: string | null
          summary: string | null
          technical_experience: string | null
          updated_at: string
          user_id: string
          visa_sponsorship_required: boolean | null
          work_authorization: string | null
          years_experience: number | null
        }
        Insert: {
          certifications?: Json
          cloud_experience?: string | null
          created_at?: string
          current_company?: string | null
          current_location?: string | null
          current_salary?: number | null
          current_title?: string | null
          education?: Json
          email?: string | null
          expected_salary?: number | null
          full_name?: string | null
          github_url?: string | null
          id?: string
          industries?: string[]
          linkedin_url?: string | null
          management_experience?: string | null
          notice_period?: string | null
          phone?: string | null
          portfolio_url?: string | null
          preferred_locations?: string[]
          security_experience?: string | null
          summary?: string | null
          technical_experience?: string | null
          updated_at?: string
          user_id: string
          visa_sponsorship_required?: boolean | null
          work_authorization?: string | null
          years_experience?: number | null
        }
        Update: {
          certifications?: Json
          cloud_experience?: string | null
          created_at?: string
          current_company?: string | null
          current_location?: string | null
          current_salary?: number | null
          current_title?: string | null
          education?: Json
          email?: string | null
          expected_salary?: number | null
          full_name?: string | null
          github_url?: string | null
          id?: string
          industries?: string[]
          linkedin_url?: string | null
          management_experience?: string | null
          notice_period?: string | null
          phone?: string | null
          portfolio_url?: string | null
          preferred_locations?: string[]
          security_experience?: string | null
          summary?: string | null
          technical_experience?: string | null
          updated_at?: string
          user_id?: string
          visa_sponsorship_required?: boolean | null
          work_authorization?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      resumes: {
        Row: {
          created_at: string
          id: string
          is_default: boolean
          name: string
          status: string
          storage_path: string
          target_role: string | null
          updated_at: string
          user_id: string
          version: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_default?: boolean
          name: string
          status?: string
          storage_path: string
          target_role?: string | null
          updated_at?: string
          user_id: string
          version?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_default?: boolean
          name?: string
          status?: string
          storage_path?: string
          target_role?: string | null
          updated_at?: string
          user_id?: string
          version?: string
        }
        Relationships: []
      }
      role_city_rotation: {
        Row: {
          applications_generated: number
          city: string
          created_at: string
          id: string
          jobs_processed: number
          last_used_at: string | null
          role: string
          search_count: number
          updated_at: string
          user_id: string
          work_mode: string
        }
        Insert: {
          applications_generated?: number
          city: string
          created_at?: string
          id?: string
          jobs_processed?: number
          last_used_at?: string | null
          role: string
          search_count?: number
          updated_at?: string
          user_id: string
          work_mode?: string
        }
        Update: {
          applications_generated?: number
          city?: string
          created_at?: string
          id?: string
          jobs_processed?: number
          last_used_at?: string | null
          role?: string
          search_count?: number
          updated_at?: string
          user_id?: string
          work_mode?: string
        }
        Relationships: []
      }
      run_counters: {
        Row: {
          created_at: string
          last_number: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          last_number?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          last_number?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      search_profiles: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          last_used_at: string | null
          locations: string[]
          max_experience: number | null
          min_experience: number
          min_salary: number | null
          name: string
          resume_id: string | null
          rotation_index: number
          skills: string[]
          titles: string[]
          updated_at: string
          user_id: string
          weights: Json
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          last_used_at?: string | null
          locations?: string[]
          max_experience?: number | null
          min_experience?: number
          min_salary?: number | null
          name: string
          resume_id?: string | null
          rotation_index?: number
          skills?: string[]
          titles?: string[]
          updated_at?: string
          user_id: string
          weights?: Json
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          last_used_at?: string | null
          locations?: string[]
          max_experience?: number | null
          min_experience?: number
          min_salary?: number | null
          name?: string
          resume_id?: string | null
          rotation_index?: number
          skills?: string[]
          titles?: string[]
          updated_at?: string
          user_id?: string
          weights?: Json
        }
        Relationships: []
      }
      skills: {
        Row: {
          category: string
          created_at: string
          id: string
          name: string
          updated_at: string
          user_id: string
          weight: number
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          user_id: string
          weight?: number
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
          weight?: number
        }
        Relationships: []
      }
      task_counters: {
        Row: {
          created_at: string
          last_number: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          last_number?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          last_number?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      bootstrap_user_defaults: {
        Args: { _user_id: string }
        Returns: undefined
      }
      bump_agent_config_revision: {
        Args: { _user_id: string }
        Returns: number
      }
      claim_automation_tasks: {
        Args: { _limit?: number; _user_id: string }
        Returns: {
          agent_id: string | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          last_error: string | null
          max_retries: number
          payload: Json
          preferences_snapshot: Json | null
          priority: number
          result: Json | null
          retry_count: number
          run_id: string | null
          snapshot_revision: number | null
          started_at: string | null
          status: string
          task_code: string | null
          type: string
          updated_at: string
          user_id: string
        }[]
        SetofOptions: {
          from: "*"
          to: "automation_tasks"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_role_city_rotation_applications: {
        Args: {
          _city: string
          _role: string
          _user_id: string
          _work_mode: string
        }
        Returns: undefined
      }
      increment_role_city_rotation_jobs: {
        Args: {
          _city: string
          _jobs: number
          _role: string
          _user_id: string
          _work_mode: string
        }
        Returns: undefined
      }
      next_run_code: { Args: { _user_id: string }; Returns: string }
      next_subtask_code: { Args: { _run_id: string }; Returns: string }
      next_task_code: { Args: { _user_id: string }; Returns: string }
      normalize_job_url: { Args: { raw: string }; Returns: string }
      save_job_sources: { Args: { _rows: Json }; Returns: Json }
      save_search_scope: {
        Args: {
          _cities: string[]
          _employment_types: string[]
          _max_experience: number
          _min_experience: number
          _min_salary: number
          _preferred_industries: string[]
          _roles: string[]
          _set_employment_types: boolean
          _set_max_experience: boolean
          _set_min_experience: boolean
          _set_min_salary: boolean
          _set_preferred_industries: boolean
          _set_roles: boolean
          _work_modes: string[]
        }
        Returns: undefined
      }
      trigger_agent_cron: { Args: never; Returns: undefined }
      work_mode_token: { Args: { raw: string }; Returns: string }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const

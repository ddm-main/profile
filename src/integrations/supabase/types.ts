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
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      agent_actions: {
        Row: {
          action: string
          agent_id: string | null
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
      application_questions: {
        Row: {
          answer: string
          category: string
          created_at: string
          id: string
          question: string
          updated_at: string
          user_id: string
          verified: boolean
        }
        Insert: {
          answer: string
          category?: string
          created_at?: string
          id?: string
          question: string
          updated_at?: string
          user_id: string
          verified?: boolean
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string
          id?: string
          question?: string
          updated_at?: string
          user_id?: string
          verified?: boolean
        }
        Relationships: []
      }
      applications: {
        Row: {
          applied_at: string | null
          company: string | null
          cover_letter_id: string | null
          created_at: string
          failure_reason: string | null
          id: string
          job_id: string | null
          job_title: string | null
          job_url: string | null
          next_follow_up: string | null
          notes: string | null
          recruiter_email: string | null
          recruiter_linkedin: string | null
          recruiter_name: string | null
          resume_id: string | null
          source_slug: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          applied_at?: string | null
          company?: string | null
          cover_letter_id?: string | null
          created_at?: string
          failure_reason?: string | null
          id?: string
          job_id?: string | null
          job_title?: string | null
          job_url?: string | null
          next_follow_up?: string | null
          notes?: string | null
          recruiter_email?: string | null
          recruiter_linkedin?: string | null
          recruiter_name?: string | null
          resume_id?: string | null
          source_slug?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          applied_at?: string | null
          company?: string | null
          cover_letter_id?: string | null
          created_at?: string
          failure_reason?: string | null
          id?: string
          job_id?: string | null
          job_title?: string | null
          job_url?: string | null
          next_follow_up?: string | null
          notes?: string | null
          recruiter_email?: string | null
          recruiter_linkedin?: string | null
          recruiter_name?: string | null
          resume_id?: string | null
          source_slug?: string | null
          status?: string
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
          priority: number
          result: Json | null
          retry_count: number
          started_at: string | null
          status: string
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
          priority?: number
          result?: Json | null
          retry_count?: number
          started_at?: string | null
          status?: string
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
          priority?: number
          result?: Json | null
          retry_count?: number
          started_at?: string | null
          status?: string
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
        ]
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
            isOneToOne: false
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
          employment_types: string[]
          excluded_keywords: string[]
          id: string
          job_expiry_days: number
          max_applications_per_day: number
          max_experience: number | null
          max_jobs_per_batch: number
          max_jobs_per_day: number
          min_experience: number
          min_salary: number | null
          ollama_model: string
          preferred_industries: string[]
          preferred_skills: string[]
          remote_preference: string
          require_approval: boolean
          required_skills: string[]
          review_threshold: number
          scan_time: string
          target_locations: string[]
          target_titles: string[]
          updated_at: string
          user_id: string
          weights: Json
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
          employment_types?: string[]
          excluded_keywords?: string[]
          id?: string
          job_expiry_days?: number
          max_applications_per_day?: number
          max_experience?: number | null
          max_jobs_per_batch?: number
          max_jobs_per_day?: number
          min_experience?: number
          min_salary?: number | null
          ollama_model?: string
          preferred_industries?: string[]
          preferred_skills?: string[]
          remote_preference?: string
          require_approval?: boolean
          required_skills?: string[]
          review_threshold?: number
          scan_time?: string
          target_locations?: string[]
          target_titles?: string[]
          updated_at?: string
          user_id: string
          weights?: Json
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
          employment_types?: string[]
          excluded_keywords?: string[]
          id?: string
          job_expiry_days?: number
          max_applications_per_day?: number
          max_experience?: number | null
          max_jobs_per_batch?: number
          max_jobs_per_day?: number
          min_experience?: number
          min_salary?: number | null
          ollama_model?: string
          preferred_industries?: string[]
          preferred_skills?: string[]
          remote_preference?: string
          require_approval?: boolean
          required_skills?: string[]
          review_threshold?: number
          scan_time?: string
          target_locations?: string[]
          target_titles?: string[]
          updated_at?: string
          user_id?: string
          weights?: Json
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
          enabled: boolean
          id: string
          jobs_found: number
          last_error: string | null
          last_scan_at: string | null
          last_success_at: string | null
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
          enabled?: boolean
          id?: string
          jobs_found?: number
          last_error?: string | null
          last_scan_at?: string | null
          last_success_at?: string | null
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
          enabled?: boolean
          id?: string
          jobs_found?: number
          last_error?: string | null
          last_scan_at?: string | null
          last_success_at?: string | null
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
          created_at: string
          description: string | null
          easy_apply: boolean
          employment_type: string | null
          experience_text: string | null
          expires_at: string | null
          fingerprint: string
          id: string
          is_demo: boolean
          location: string | null
          min_experience: number | null
          min_salary: number | null
          posted_at: string | null
          salary_text: string | null
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
          created_at?: string
          description?: string | null
          easy_apply?: boolean
          employment_type?: string | null
          experience_text?: string | null
          expires_at?: string | null
          fingerprint: string
          id?: string
          is_demo?: boolean
          location?: string | null
          min_experience?: number | null
          min_salary?: number | null
          posted_at?: string | null
          salary_text?: string | null
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
          created_at?: string
          description?: string | null
          easy_apply?: boolean
          employment_type?: string | null
          experience_text?: string | null
          expires_at?: string | null
          fingerprint?: string
          id?: string
          is_demo?: boolean
          location?: string | null
          min_experience?: number | null
          min_salary?: number | null
          posted_at?: string | null
          salary_text?: string | null
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
      search_profiles: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          locations: string[]
          max_experience: number | null
          min_experience: number
          min_salary: number | null
          name: string
          resume_id: string | null
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
          locations?: string[]
          max_experience?: number | null
          min_experience?: number
          min_salary?: number | null
          name: string
          resume_id?: string | null
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
          locations?: string[]
          max_experience?: number | null
          min_experience?: number
          min_salary?: number | null
          name?: string
          resume_id?: string | null
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
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
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

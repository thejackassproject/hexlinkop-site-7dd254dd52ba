import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export type BlogPost = {
  id: string;
  website_id: string;
  title: string;
  slug: string;
  content_markdown: string;
  excerpt: string;
  author_name: string;
  author_role: string;
  author_avatar_path: string;
  cover_image_path: string;
  cover_image_alt: string | null;
  published_at: string;
  reading_time_minutes: number;
  category?: string;
  status: 'draft' | 'published';
};

/**
 * Create a Supabase client for Cloudflare Pages runtime
 * @param runtime - Cloudflare runtime environment (Astro.locals.runtime.env)
 */
export function createSupabaseClient(runtime?: any): SupabaseClient {
  // DEBUG: Log runtime context availability
  console.log('[Supabase Client] Runtime provided:', !!runtime);
  console.log('[Supabase Client] Runtime.env available:', !!runtime?.env);
  
  // For Cloudflare Pages, env vars come from runtime.env
  const supabaseUrl = runtime?.env?.SUPABASE_URL;
  const supabaseAnonKey = runtime?.env?.SUPABASE_ANON_KEY;
  
  // DEBUG: Log environment variable availability (without exposing values)
  console.log('[Supabase Client] SUPABASE_URL present:', !!supabaseUrl);
  console.log('[Supabase Client] SUPABASE_ANON_KEY present:', !!supabaseAnonKey);
  
  if (supabaseUrl) {
    console.log('[Supabase Client] URL value:', supabaseUrl.substring(0, 30) + '...');
  }
  
  if (supabaseAnonKey) {
    console.log('[Supabase Client] Key starts with:', supabaseAnonKey.substring(0, 20) + '...');
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('[Supabase Client] ERROR: Missing environment variables');
    console.error('[Supabase Client] Available env keys:', runtime?.env ? Object.keys(runtime.env) : 'runtime.env is undefined');
    throw new Error('Missing Supabase environment variables');
  }
  
  console.log('[Supabase Client] Creating Supabase client successfully');
  return createClient(supabaseUrl, supabaseAnonKey);
}

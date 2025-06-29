import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client used by API routes.
// Uses service role key for write access.
// IMPORTANT: Ensure `SUPABASE_SERVICE_ROLE_KEY` is kept secret and only used server-side.

const supabaseUrl = process.env.SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.warn(
    "Supabase environment variables are missing. Alpha sign-ups will fail until they are provided."
  );
}

export const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
  },
});

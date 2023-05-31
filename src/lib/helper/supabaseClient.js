import { createClient } from "@supabase/supabase-js";

const env = import.meta.env;

// Create a single supabase client for interacting with your database
const supabase = createClient(
  env.VITE_REACT_PROJECT_URL,
  env.VITE_REACT_PROJECT_KEY
);

export default supabase;

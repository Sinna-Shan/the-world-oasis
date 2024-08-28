import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lolcusxaykmhacosffto.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbGN1c3hheWttaGFjb3NmZnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MTgyMDYsImV4cCI6MjA0MDA5NDIwNn0.0aWQehdiGH9RbIRz2qZb7CTiLt9IlLzoq_UxsmFChLs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqmwrgjiloavhkjdznrc.supabase.co'; // Sua URL do Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbXdyZ2ppbG9hdmhramR6bnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzODcyMTksImV4cCI6MjA0NTk2MzIxOX0.2O-e_8aqXwF44N9xBqVDeGENK_c6hep9gCgiX9qIsE8'; // Sua chave pública do Supabase

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

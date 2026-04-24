export const GET = () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL ? "set" : "missing",
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? "set" : "missing", 
    NETWORK_SITE_ID: process.env.NETWORK_SITE_ID || "missing",
    importMetaUrl: import.meta.env.SUPABASE_URL ? "set" : "missing",
    importMetaId: import.meta.env.NETWORK_SITE_ID || "missing",
  };
  return new Response(JSON.stringify(env, null, 2), { headers: { "Content-Type": "application/json" } });
};
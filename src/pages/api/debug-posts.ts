import { createClient } from "@supabase/supabase-js";

export const GET = async () => {
  const url = process.env.SUPABASE_URL || "";
  const key = process.env.SUPABASE_ANON_KEY || "";
  const siteId = process.env.NETWORK_SITE_ID || "0";
  
  if (!url || !key) return new Response(JSON.stringify({ error: "no supabase config" }));
  
  const supabase = createClient(url, key);
  
  const { data, error } = await supabase
    .from("network_posts")
    .select("id,slug,title,network_site_id")
    .eq("network_site_id", parseInt(siteId))
    .limit(5);
  
  return new Response(JSON.stringify({ siteId, data, error }, null, 2), { 
    headers: { "Content-Type": "application/json" } 
  });
};
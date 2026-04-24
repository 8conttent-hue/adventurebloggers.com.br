import { getAllPosts } from "../../lib/posts";

export const GET = async () => {
  try {
    const posts = await getAllPosts();
    return new Response(JSON.stringify({ count: posts.length, posts: posts.map(p => ({ slug: p.slug, title: p.title })) }, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { headers: { "Content-Type": "application/json" } });
  }
};
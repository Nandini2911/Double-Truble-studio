import { getAllPosts } from "@/lib/blog";
import BlogClient from "@/components/blog/BlogClient";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}

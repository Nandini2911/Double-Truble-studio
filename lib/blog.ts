import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}


export type Frontmatter = {
  title: string;
  date: string;
  description: string;
  category: string;
  featured?: boolean;
  image: string;
   author: string; // ✅ add this
    readTime: string; // ✅
    tags?: string[]; // ✅ ADD THIS
};


export type PostMeta = Frontmatter & {
  slug: string;
};



export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(blogDir);

  return files
    .map((file) => {
      const slug = file.replace(".md", "");

      const fileContent = fs.readFileSync(
        path.join(blogDir, file),
        "utf-8"
      );

      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
        image: data.image,
        author: data.author,
        featured: data.featured ?? false,
        readTime: calculateReadTime(content),
      };
    })

    // 🔥 STEP 2A: FILTER FUTURE POSTS
    .filter((post) => {
      const today = new Date();
      const postDate = new Date(post.date);

      return postDate <= today;
    })

    // 🔥 STEP 2B: SORT LATEST FIRST
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error("Post not found");
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as Frontmatter,
    content,
  };
}

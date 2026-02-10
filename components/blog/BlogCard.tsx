import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;

};

export default function BlogCard({
  slug,
  title,
  description,
  image,
  category,
  author,
  date,
  readTime,
}: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="dts-card-3d overflow-hidden h-full flex flex-col">

        {/* Image */}
        <div className="relative h-52 overflow-hidden rounded-xl mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute top-4 left-4 dts-pill">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-dts-neon transition">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed flex-1">
            {description}
          </p>

          {/* Author & Date */}
          <div className="mt-6 flex justify-between text-xs text-white border-t border-gray-700 pt-4">
  <span>By {author}</span>
  <span>{date} • {readTime}</span>
</div>

        </div>
      </div>
    </Link>
  );
}

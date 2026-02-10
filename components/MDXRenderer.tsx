"use client";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";

type Props = {
  source: string;
};

export default function MDXRenderer({ source }: Props) {
  const [mdx, setMdx] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const mdxSource = await serialize(source);
      setMdx(mdxSource);
    }
    load();
  }, [source]);

  if (!mdx) return null;

  return <MDXRemote {...mdx} />;
}

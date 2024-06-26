import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Kevin's Blogs",
  description: "Welcome to Kevin's home page!",
};

export default function BlogsSharedLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pageTitle = "Here are the shared blogs";
  return (
    <div className="border-blue-300 border-2">
      <Link href={ `/blogs/shared` } className="text-amber-300">
        { pageTitle }
      </Link>

      <div className="mt-4 mb-4">
        { children }
      </div>
    </div>
  );
}

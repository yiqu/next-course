import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Kevin Blog Details",
  description: "Welcome to Kevin's home page!",
};

export default function BlogPostLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { slug: string } }>) {
  const slug = params.slug;
  const pageTitle = `Read time for blog ${slug}: two mins`;
  return (
    <div className="border-yellow-300 border-2">
      <div>
        { pageTitle }
      </div>

      <div className="mt-4 mb-4">
        { children }
      </div>
    </div>
  );
}

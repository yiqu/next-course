import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pageTitle = " Project layout";
  return (
    <div>
      <Link href={ `/projects` } className="text-blue-400">
        { pageTitle }
      </Link>

      <div className="mt-4 mb-4">
        { children }
      </div>
    </div>
  );
}

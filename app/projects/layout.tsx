import Link from "next/link";
import type { Metadata } from "next/types";
import NavLink from "../shared/links/NavLink";

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pageTitle = "Project layout";
  return (
    <div>
      <Link href={ `/projects` } className="text-blue-400">
        { pageTitle }
      </Link>

      <div className="text-blue-600 flex justify-start align-middle space-x-3">
        {
          projectList.map((project) => {
            return (
              <NavLink key={ project } label={ project } url={ `/projects/${project}` }>
                { project }
              </NavLink>
            );
          })
        }
      </div>

      <div className="mt-4 mb-4">
        { children }
      </div>
    </div>
  );
}

const projectList = ['angular', 'react', 'vue'];
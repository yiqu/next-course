import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Angular",
  description: "Angular projects!",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pageTitle = "Angular Project layout";
  return (
    <div>
      { pageTitle }
      <div className="mt-4 mb-4">
        <div>
          this is where you see the expenses
        </div>
      </div>
      { children }
    </div>
  );
}

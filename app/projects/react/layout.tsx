import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "React",
  description: "React projects!",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pageTitle = "React Project layout";
  return (
    <div>
      { pageTitle }
      <div className="mt-4 mb-4">
      </div>
      { children }
    </div>
  );
}

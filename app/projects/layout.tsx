import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function ProjectsLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Project layout
      <div className="mt-4 mb-4">
        Navigation Bar
      </div>
      { children }
    </div>
  );
}

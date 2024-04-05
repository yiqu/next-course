import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Expense Details",
  description: "Angular projects!",
};

export default function ExpenseDetailsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      Expense Details
      <div className="mt-4 mb-4">
      </div>
      { children }
    </div>
  );
}

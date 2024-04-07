import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Expense Details",
  description: "Angular projects!",
};

export default function ExpenseDetailsLayout({ children, params }: Readonly<{ children: React.ReactNode; params: {expenseId: string} }>) {

  if (params.expenseId === 'notfoundone') {
    notFound();
  }

    return (
      <div>
        Expense Details for { params.expenseId }
        <div className="mt-4 mb-4"></div>
        { children }
      </div>
    );
}

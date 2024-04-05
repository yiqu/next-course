import { getExpensesPaged } from "@/lib/expenses/expenses.server";
import type { Expense } from "@/shared/models/expense.model";
import Link from "next/link";

async function ExpensesSlowDisplay() {

  const expenseResponse = await getExpensesPaged(0, null, 8);
  const expenses: Expense[] = expenseResponse.data;

  console.log("projects page");
  return (
    <div className="text-black" >
      List of expenses:
      <div>
        Total expenses count: { expenseResponse.totalCount }
      </div>
      <div className="flex flex-col space-y-2">
        {
          expenses.map((expense: Expense) => (
            <Link key={ expense.id } href={ `/projects/angular/${expense.id}` }>
              <div key={ expense.id } className="flex flex-row space-x-3">
                <div className="w-12">
                  { expense.amount }
                </div>
                <div>
                  { new Date(expense.addedAtEpoch).toISOString() }
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default ExpensesSlowDisplay;
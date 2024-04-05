import { Suspense } from "react";
import ExpensesFastDisplay from "./ExpenseFast";
import ExpensesSlowDisplay from "./ExpenseSlow";
import ExpenseListLoading from "@/shared/components/ExpenseListLoading";

function Projects() {

  return (
    <div className="text-black">
      Two types of expenses:

      <div className="flex flex-row space-x-8 mt-3">
        <div className="mt-1">
          Fast
          <div className="mt-1" style={ { minWidth: '20rem' } }>
            <Suspense fallback={ <ExpenseListLoading /> }>
              <ExpensesFastDisplay />
            </Suspense>
          </div>
        </div>

        <div className="mt-1">
          Slow
          <div className="mt-1" style={ { height: '30rem', overflow: 'auto', minWidth: '20rem' } } >
            <Suspense fallback={ <ExpenseListLoading /> }>
              <ExpensesSlowDisplay />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="mt-3">
        An expense is an item requiring an outflow of money, or any form of fortune in general, to another person or group as payment for an item,
        service, or other category of costs. For a tenant, rent is an expense. For students or parents, tuition is an expense
      </div>

      <div className="mt-3">
        An expense is an item requiring an outflow of money, or any form of fortune in general, to another person or group as payment for an item,
        service, or other category of costs. For a tenant, rent is an expense. For students or parents, tuition is an expense
      </div>


    </div>
  );
}

export default Projects;
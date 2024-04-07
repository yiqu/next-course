import { getExpensesPaged } from '@/lib/expenses/expenses.server';
import type { Expense } from '@/shared/models/expense.model';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Alert from '@mui/material/Alert';

async function ExpensesFastDisplay() {
  const expenseResponse = await getExpensesPaged(0, null, 0);
  const expenses: Expense[] = expenseResponse.data;

  return (
    <div className="text-black">
      List of expenses:
      <Alert>
        <Typography variant="body0">
          Total expenses count: { expenseResponse.totalCount }
        </Typography>
      </Alert>
      <div className="flex flex-col space-y-2">
        { expenses.map((expense: Expense) => (
          <Link key={ expense.id } href={ `/projects/angular/${expense.id}` }>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={ 2 }
            >
              <div className="w-12">{ expense.amount }</div>
              <div>{ new Date(expense.addedAtEpoch).toISOString() }</div>
              <Typography variant="body0">{ expense.id }</Typography>
            </Stack>
          </Link>
        )) }
      </div>
    </div>
  );
}

export default ExpensesFastDisplay;

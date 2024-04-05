import type { Account } from "./account.model";
import type { ExpenseComment } from "./comment.model";
import type { DateDisplayFormat } from "./general.model";

export interface ExpenseAddable {
  amount: number;
  date: number;
  dateStringForInput?: string;
  addedAtEpoch: number;
  updatedAtEpoch: number;
  account?: Account | null;
  accountId: string;
}

export interface ExpenseAddable2 {
  amount: number | '';
  date: number | string;
  account?: Account | null;
  accountId: string;

}

export interface ExpenseEditable {
  id: string;
  amount: number;
  date: number;
  accountId: string;
  updatedAtEpoch: number;
}

export interface Expense {
  id: string;
  amount: number;
  date: number;
  dateAdded: string | Date | null;
  updatedAt: string | Date | null;
  dateFromNow?: DateDisplayFormat;
  dateAddedFromNow?: DateDisplayFormat;
  updatedAtFromNow?: DateDisplayFormat;
  addedAtEpoch: number;
  updatedAtEpoch: number;
  accountId: string;
  account: Account;
  _count?: {
    comments: number;
  };
}
export interface ExpenseWithComments extends Expense {
  comments: ExpenseComment[];
}

export interface ExpenseWithoutAccount {
  id: string;
  amount: number;
  date: number;
  dateAdded: string | Date;
  updatedAt: string | null | Date;
  addedAtEpoch: number;
  updatedAtEpoch: number;
  accountId: string;
}

export interface ExpenseDisplay {
  id: string;
  amount: number;
  amountOfInteger: number;
  amountOfDecimal: string;
  date: number;
  dateFromNowDisplay?: { display: string; tooltip: string };
  dateFullDisplay?: { display: string; tooltip: string };
  addedAtEpoch: number;
  updatedAtEpoch: number;
  accountId: string;
  // prisma defaulted values
  dateAdded: string | Date;
  updatedAt: string | null | Date;

  gainAmount: number;
  gainAmountOfInteger: number;
  gainAmountOfDecimal: string;
  gainPercentage: number;
  bgColorClassName: string;
  textColorClassName: string;
}
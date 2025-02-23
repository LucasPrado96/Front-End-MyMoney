export type createCategoryType = {
  title: string;
  color: string;
};

export type Category = {
  _id: string;
  title: string;
  color: string;
};

export type createTransactionType = {
  categoryId: string;
  title: string;
  amount: number;
  date: string;
  type: "expense" | "income";
};


export type TransactionsFilter = {
  title?: string;
  categoryId?: string;
  beginDate?: string;
  endDate?: string
}

export type Transaction = {
  _id: string;
  title: string;
  amount: number;
  date: Date;
  type: "expense" | "income";
  category: Category;
};

export type Balance = {
  _id: string | null;
  incomes: number;
  expenses: number;
  balance: number;
}

export type Expense = {
  _id: string;
  title: string;
  amount: number;
  color: string;
}

export type DashBoard = {
  expenses: Expense[] | undefined;
  balance: Balance;
  expense: Expense[];
}

export type DashBoardFilter = {
  beginDate: string 
  endDate: string
}

export type FinantialEvolutionFilter = {
  year: string
}

export type FinantialEvolution = {
  _id: [number, number];
  incomes: number;
  expenses: number;
  balance: number;
}
import { FormatedCurrency } from "../../utils/formatedCurrency";
import {
  Transactions,
  TransactionsContent,
  InfoLeftSide,
  InfoRightSide,
} from "./style";

type TransactionProps ={
    id: number;
    title: string;
    date: string;
    amount: number;
    variant?: 'expense' | 'income'
    category: {
      color: string;
      title: string;
    }
}


export function Transaction({id, title, date, amount, variant = 'income', category}: TransactionProps) {
  return (
    <TransactionsContent>
      <Transactions >
        
        <InfoLeftSide>
          <span>#{id.toString().padStart(4, '0')}</span>
          <div>
            <strong>{title}</strong>
            <span>{date}</span>
          </div>
        </InfoLeftSide>

        <InfoRightSide $variant={variant} tagColor={category.color}>
          <strong>{FormatedCurrency(amount)}</strong>
          <span>{category.title.toUpperCase()}</span>
        </InfoRightSide>

      </Transactions>
    </TransactionsContent>
  );
}

import { ArrowDown, ArrowUp, CurrencyDollar, } from "@phosphor-icons/react"
import { Container } from "./styles"
import { FormatedCurrency } from "../../utils/formatedCurrency"


type CardProps = {
    variant?: 'expenses' | 'incomes' | 'balance'
    title: string
    amount: number
}

const IconsMap = {
    balance: <CurrencyDollar/>,
    expenses: <ArrowDown/>,
    incomes: <ArrowUp/>,
}

export function Cards({variant = 'balance', title, amount}:CardProps){
    return(
        <Container $variant={variant}>
            {IconsMap[variant]}
            <span>{title}</span>
            <strong>{FormatedCurrency(amount)}</strong>
        </Container>
    )
}
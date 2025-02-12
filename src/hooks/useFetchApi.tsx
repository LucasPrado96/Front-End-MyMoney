/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Category, DashBoard, FinantialEvolution, Transaction } from "../services/types";
import { CreateCategoryData, CreateTransactionData, FinancialEvolutionFilterData, TransactionsFilterData } from "../validators/types";
import { APIService } from "../services/api";
import { FormatDate } from "../utils/formatDate";

interface FetchAPIProps {
    dashboard: DashBoard;
    financialEvolution: FinantialEvolution[];
    createCategory: (data: CreateCategoryData) => Promise<void>;
    createTransaction: (data: CreateTransactionData) => Promise<void>;
    fetchCategories: () => Promise<void>;
    fetchTransactions: (filters: TransactionsFilterData) => Promise<void>;
    fetchDashboard: (filters: Pick<TransactionsFilterData, 'beginDate'| 'endDate'> ) => Promise<void> 
    fetchFinancialEvolution: (filters: Pick<FinancialEvolutionFilterData, 'year'>) => Promise<void>
    categories: Category[];
    transactions: Transaction[]
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps);

type FetchAPIProviderProps = {
    children: ReactNode
};

export function FetchAPIProvider({children}: FetchAPIProviderProps){
    const [categories, setCategories] = useState<Category[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [dashboard, setDashBoard] = useState<DashBoard>({} as DashBoard)
    const [financialEvolution, setFinancialEvolution] = useState<FinantialEvolution[]>([])

    const fetchTransactions = useCallback(async (filters: TransactionsFilterData) => {
        const data = await APIService.getTransactions({
            ...filters,
            beginDate: FormatDate(filters.beginDate),
            endDate: FormatDate(filters.endDate),
        });
        setTransactions(data)
    }, [])


        const createTransaction = useCallback(async (data: CreateTransactionData) => {
            await APIService.createTransaction({
                ...data,
                date: FormatDate(data.date),
                amount: Number(data.amount.replace(/[^0-9]/g, '')), //tirando a formatação do input
            });
        }, []);


    const createCategory = useCallback(async (data: CreateCategoryData) => {
        await APIService.createCategory(data);
    }, [])

    const fetchCategories = useCallback(async () => {
        const data = await APIService.getCategories();

        setCategories(data)
    }, []);


    const fetchDashboard = useCallback(async ({ beginDate, endDate}:Pick<TransactionsFilterData, 'beginDate'| 'endDate'> ) => {
            const dashboard = await APIService.getDashBoard({
                beginDate: FormatDate(beginDate),
                endDate: FormatDate(endDate),
            })
            setDashBoard(dashboard)
      
           
    }, [])


    const fetchFinancialEvolution = useCallback(async ({year}: Pick<FinancialEvolutionFilterData, 'year'>) => {  
        const financialEvolution = await APIService.getFinantialEvolutinon({
            year: year.padStart(4, '0')
        })
        setFinancialEvolution(financialEvolution)
     }, [])

    return (
        <FetchAPIContext.Provider value={{
        categories, 
        transactions, 
        dashboard,
        financialEvolution,
         createCategory,
         fetchCategories, 
         createTransaction, 
         fetchTransactions, 
         fetchDashboard,
         fetchFinancialEvolution

         

         }}> 
            {children}
        </FetchAPIContext.Provider>
    )
}


export function useFetchApi(): FetchAPIProps{
    return useContext(FetchAPIContext);
}
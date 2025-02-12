import axios from "axios";
import {createCategoryType,  Category, createTransactionType, Transaction, TransactionsFilter, DashBoard, DashBoardFilter, FinantialEvolutionFilter, FinantialEvolution,  } from './types'


export class APIService {
private static client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


static async getDashBoard({beginDate, endDate}: DashBoardFilter): Promise<DashBoard> {
    const { data } = await APIService.client.get<DashBoard>('/transactions/dashboard', {
        params: {
            beginDate,
            endDate,
            
            
            
        },
    })

    return data
}

static async createCategory( createCategoryData: createCategoryType): Promise<Category> {
    const {data} = await APIService.client.post<Category>('/categories', createCategoryData,)
   

    return data
}

static async getCategories(): Promise<Category[]>{
    const { data} = await APIService.client.get<Category[]>('/categories')

    return data
}

static async createTransaction(createTransactionData: createTransactionType): Promise<Transaction>{
    const {data} = await APIService.client.post<Transaction>('/transactions', createTransactionData)
    console.log(data)
    return data
   
}


static async getTransactions({title, categoryId, endDate, beginDate}: TransactionsFilter): Promise<Transaction[]>{
    const {data} = await APIService.client.get<Transaction[]>('/transactions', {
        params: {
            ...(title?.length && {title}),
            ...(categoryId?.length && {categoryId}),
            beginDate,
            endDate,
            
        },
    })

    return data
}


static async getFinantialEvolutinon({year}: FinantialEvolutionFilter): Promise<FinantialEvolution[]> {
    const {data} = await APIService.client.get<FinantialEvolution[]>('/transactions/finantial-evolution', {
        params: {
            year,
        },
    })
    return data
}

}
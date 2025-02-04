import {
  HeaderContent,
  Main,
  Section,
  Filters,
  InputGroup,
  Balance,
  ChartContainer,
  ChartContent,
  InputChartDiv,
  Aside,
  TransactionsInputs,
  TransactionGroup,
 
  
} from "./styles";


import { Titte } from "../../components/tittle";
import { Input } from "../../components/input";
import { InputMask } from "@react-input/mask";
import { ButtonIcon } from "../../components/buttonIcons";
import { Cards } from "../../components/card";

import { Transaction } from "../../components/transaction";

import { CreateCategory } from "../../components/createCategory";
import { CreateTransaction } from "../../components/createTransaction";
import { CategoryChart, CategoryProps } from "../../components/categoryPieChart";
import { ChartFinance } from "../../components/barchartFinance";
import { useForm } from "react-hook-form";
import { TransactionsFilterData } from "../../validators/types";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionsFilterSchema } from "../../validators/schemas";
import { useCallback, useEffect, useState } from "react";
import { useFetchApi } from "../../hooks/useFetchApi";


export function Home() {
const transactionFilterForm = useForm<TransactionsFilterData>({
  defaultValues: {
    title: '',
    categoryId: '',
    beginDate: dayjs().startOf('month').format('DD/MM/YYYY'),
    endDate: dayjs().endOf('month').format('DD/MM/YYYY'),
  },
  resolver: zodResolver(transactionsFilterSchema)
});

const {transactions, fetchTransactions, fetchDashboard, dashboard} = useFetchApi()

useEffect(() => {
  const { beginDate, endDate} = transactionFilterForm.getValues()
  fetchDashboard({beginDate, endDate});
  fetchTransactions(transactionFilterForm.getValues())
}, [fetchTransactions, transactionFilterForm, fetchDashboard])



  const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null >(null);

  const handleSelectCategory = useCallback(({id, title, color}: CategoryProps )  => {
    setSelectedCategory({id, title, color});
    transactionFilterForm.setValue('categoryId', id)
  }, [transactionFilterForm],)


  const handleDesSelectCategory = useCallback(() => {
    setSelectedCategory(null)
    transactionFilterForm.setValue('categoryId', '')
  },[transactionFilterForm])

const onSubmitTransactions = useCallback(async (data: TransactionsFilterData) => {
    await fetchTransactions(data)
}, [fetchTransactions])


const onSubmitDashBoard = useCallback( async (data: TransactionsFilterData) => {
    const { beginDate, endDate} = data;
    await fetchDashboard({beginDate, endDate});
    await fetchTransactions(data);
},[fetchTransactions, fetchDashboard])

  return (
    <>
      <HeaderContent>
        <div className="box1">
          <h1>MyMoney</h1>
        </div>

        <div className="box2">
          <CreateTransaction/>
          <CreateCategory/>
        </div>
      </HeaderContent>

      <Main>
        <Section>
          <Filters>
            <Titte title="Saldo" subtittle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
           
                {...transactionFilterForm.register('beginDate')}
              />

              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
            
                {...transactionFilterForm.register('endDate')}
              />
              <ButtonIcon onClick={transactionFilterForm.handleSubmit(onSubmitDashBoard)}/>
            </InputGroup>
          </Filters>

          <Balance>
            <Cards title="Saldo" amount={dashboard?.balance?.balance || 0} />
            <Cards title="Receitas" variant="incomes" amount={dashboard?.balance?.incomes || 0} />
            <Cards title="Gastos" variant="expenses" amount={dashboard?.balance?.expenses * -1 || 0} />
          </Balance>

          <ChartContainer>
            <header>
              <Titte
                title="Gastos"
                subtittle="Despesas por categoria no período"
              />
            </header>
            <ChartContent>

              <CategoryChart onClick={handleSelectCategory} />
            </ChartContent>
          </ChartContainer>

          <ChartContainer>
            <header>
              <Titte
                title="Evolução Financeira"
                subtittle="Saldo, Receitas e Gastos no ano"
              />
              <InputChartDiv>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </InputChartDiv>
            </header>
            <ChartContent>
              <ChartFinance/>
            </ChartContent>
          </ChartContainer>
        </Section>

        <Aside>
          <header>
            <Titte
              title="Transações"
              subtittle="Receitas e Gastos no Período"
          
            />
            <TransactionsInputs>
              <Input 
              placeholder="Procurar Transação..." 
              {...transactionFilterForm.register('title')}
              />
              <ButtonIcon onClick={transactionFilterForm.handleSubmit(onSubmitTransactions)}/>
            </TransactionsInputs>
          </header>

      <TransactionGroup>
        {transactions?.length && (transactions?.map((item, index) => (
          <Transaction 
          key={item._id}
          id={index + 1} 
          date={dayjs(item.date).add(3, 'hours').format('DD/MM/YYYY')}
          amount={item.type == 'expense' ? item.amount * -1 : item.amount} 
          title={item.title}
          category={{title: item.category.title, color: item.category.color }}
          variant={item.type}
          />
        )))}
      
      </TransactionGroup> 
          
        </Aside>
      </Main>
    </>
  );
}

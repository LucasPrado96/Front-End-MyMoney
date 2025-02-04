import { ResponsiveBar } from '@nivo/bar'
import { useMemo } from 'react'
import  dayjs from 'dayjs'
import ptBRLocale from 'dayjs/locale/pt-br'

import { FormatedCurrency } from '../../utils/formatedCurrency'
import { theme } from '../../styles/theme'


dayjs.locale(ptBRLocale)

const dataApi = [
    {
       _id: {
        year: 2025,
        month: 1,
       },

       balance: 628900,
       incomes: 763543,
       expenses: 485455,
    },

    {
        _id: {
         year: 2025,
         month: 2,
        },
 
        balance: 689400,
        incomes: 763443,
        expenses: 485155,
     },

     {
        _id: {
         year: 2025,
         month: 3,
        },
 
        balance: 68900,
        incomes: 76343,
        expenses: 48555,
     },

     {
        _id: {
         year: 2025,
         month: 4,
        },
 
        balance: 68900,
        incomes: 106343,
        expenses: 48555,
     },

     {
        _id: {
         year: 2025,
         month: 5,
        },
 
        balance: 68900,
        incomes: 106343,
        expenses: 48555,
     }, 
     {
        _id: {
         year: 2025,
         month: 6,
        },
 
        balance: 68900,
        incomes: 106343,
        expenses: 48555,
     },
     {
        _id: {
         year: 2025,
         month: 7,
        },
 
        balance: 68900,
        incomes: 106343,
        expenses: 48555,
     },
     {
        _id: {
         year: 2025,
         month: 8,
        },
 
        balance: 68900,
        incomes: 106343,
        expenses: 48555,
     },
     {
        _id: {
         year: 2025,
         month: 9,
        },
 
        balance: 68900,
        incomes: 1065343,
        expenses: 48555,
     },
     {
        _id: {
         year: 2025,
         month: 10,
        },
 
        balance: 685900,
        incomes: 106343,
        expenses: 48555,
     },
     {
        _id: {
         year: 2025,
         month: 11,
        },
 
        balance: 685900,
        incomes: 106343,
        expenses: 248555,
     },
     {
        _id: {
         year: 2025,
         month: 12,
        },
 
        balance: 168900,
        incomes: 106343,
        expenses: 48555,
     }
]


type chartData = {
    month: string;
    Saldo: number;
    Receitas: number;
    Gastos: number;
}



export function ChartFinance(){
    const data = useMemo<chartData[]>(() => {
        const dataChart: chartData[] = dataApi.map(item => ({
            month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
            Saldo: item.balance,
            Receitas: item.incomes,
            Gastos: item.expenses

        }))

        return dataChart
    }, [])


    return(
        <ResponsiveBar 
        data={data}
        keys={['Saldo','Receitas', 'Gastos']}
        indexBy={'month'}
        colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
        groupMode='grouped'
        minValue={1}
        borderWidth={2}
        valueFormat={FormatedCurrency}
        enableLabel={false}
        enableGridY={false}
        padding={0.5}
        axisBottom={{
            tickSize: 0,
            tickPadding: 0,
        }}
        axisLeft={{
            tickSize: 0,
            format: FormatedCurrency,
            
        }}
        margin={{left: 90, bottom: 33}}
        theme={{
            text:{
                fontFamily: 'lexend',
                fontSize: 9,
                fill: theme.colors.white
               
            }, 
            tooltip:{
                container:{
                    backgroundColor: theme.colors.black,
                    padding: 12,
                    color: theme.colors.white,
                    fontFamily: 'lexend',
                    fontSize: 12,
                    borderRadius: 5,
                }
            }
        }}


        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'row',
                translateY: 35,
                symbolSize: 12, 
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: theme.colors.white,
                symbolShape: 'circle', 
                effects:[
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
    )
}


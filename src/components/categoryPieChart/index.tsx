import { ResponsivePie } from '@nivo/pie'
import { useMemo } from 'react'
import { theme } from '../../styles/theme';
import { FormatedCurrency } from '../../utils/formatedCurrency';



const dataApi = [
    {
        _id: '1',
        title: 'Alimentação',
        amount: 50000,
        color: '#fff345',

    },

    {
        _id: '2',
        title: 'Contas',
        amount: 250000,
        color: '#26d3ad',

    },

    {
        _id: '3',
        title: 'Lazer',
        amount: 30000,
        color: '#ff45d7',

    },

    {
        _id: '4',
        title: 'Ifood',
        amount: 10000,
        color: '#079c4a',

    },
]

type ChartData = {
    id: string;
    label: string;
    externalId: string;
    value: number;
    color: string;
}

export type CategoryProps = {
    id: string;
    title: string;
    color: string;

}

type CategoriesPieChartProps = {
    onClick: (category: CategoryProps) => void
}
    



export function CategoryChart({onClick}: CategoriesPieChartProps){
const data = useMemo<ChartData[]>(() => {
    const chartData = dataApi.map(item => ({
        id: item.title,
        label: item.title,
        externalId: item._id,
        value: item.amount,
        color: item.color
    }))
    return chartData;
}, [])

    return(

        <ResponsivePie 
        onClick={({data}) => onClick({
            id: data.externalId,
            title: data.id,
            color: data.color
        })}
        data={data}
        arcLabelsTextColor={'transparent'}
        arcLinkLabelsColor={theme.colors.white}
        arcLabelsRadiusOffset={0.8}
        enableArcLinkLabels={false}
        isInteractive={true}
        valueFormat={FormatedCurrency}
        arcLabel={theme.colors.white}
        colors={({data}) => data.color}
        margin={{top: 8}}
        theme={{
            text: {
                fontFamily: 'lexend',
                fontSize: 10,
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
                anchor: 'bottom-right', 
                direction: 'column', 
                justify: false,
                translateX: -5, 
                translateY: -10, 
                itemWidth: 80, 
                itemHeight: 20, 
                itemsSpacing: 5, 
                symbolSize: 12, 
                symbolShape: 'circle', 
                itemTextColor: theme.colors.white,
              
            }
        ]}
        
        />
            
       
    )
}
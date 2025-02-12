import { ResponsivePie } from "@nivo/pie";
import { useMemo } from "react";
import { theme } from "../../styles/theme";
import { FormatedCurrency } from "../../utils/formatedCurrency";
import { Expense } from "../../services/types";

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export type CategoryProps = {
  id: string;
  title: string;
  color: string;
};

type CategoriesPieChartProps = {
  onClick: (category: CategoryProps) => void;
  expenses?: Expense[];
};

export function CategoryChart({ onClick, expenses }: CategoriesPieChartProps) {
  const data = useMemo<ChartData[]>(() => {
   if(expenses?.length){
    const chartData: ChartData[] = expenses.map((item) => ({
        id: item.title,
        label: item.title,
        externalId: item._id,
        value: item.amount,
        color: item.color,
      }));
      return chartData;
      
   }

   return [];
  }, [expenses]);
  console.log(data)
  
  return (
    <ResponsivePie
      onClick={({ data }) =>
        onClick({
          id: data.externalId,
          title: data.id,
          color: data.color,
        })
      }
      data={data}
      arcLabelsTextColor={"transparent"}
      arcLinkLabelsColor={theme.colors.white}
      arcLabelsRadiusOffset={0.8}
      enableArcLinkLabels={false}
      isInteractive={true}
      valueFormat={FormatedCurrency}
      arcLabel={theme.colors.white}
      colors={({ data }) => data.color}
      margin={{ top: 8 }}
      theme={{
        text: {
          fontFamily: "lexend",
          fontSize: 10,
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 12,
            color: theme.colors.white,
            fontFamily: "lexend",
            fontSize: 12,
            borderRadius: 5,
          },
        },
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: -5,
          translateY: -10,
          itemWidth: 80,
          itemHeight: 20,
          itemsSpacing: 5,
          symbolSize: 12,
          symbolShape: "circle",
          itemTextColor: theme.colors.white,
        },
      ]}
    />
  );
}

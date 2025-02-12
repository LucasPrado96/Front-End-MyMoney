import { ResponsiveBar } from "@nivo/bar";
import { useMemo } from "react";
import dayjs from "dayjs";
import ptBRLocale from "dayjs/locale/pt-br";

import { FormatedCurrency } from "../../utils/formatedCurrency";
import { theme } from "../../styles/theme";
import { FinantialEvolution } from "../../services/types";

dayjs.locale(ptBRLocale);

type chartData = {
  month: string;
  Saldo: number;
  Receitas: number;
  Gastos: number;
};

type FinancialEvolutionChartProps = {
  financialEvolution?: FinantialEvolution[];
};

export function ChartFinance({ financialEvolution, }: FinancialEvolutionChartProps) {
  const data = useMemo<chartData[]>(() => {
    if (financialEvolution?.length) {
      const dataChart: chartData[] = financialEvolution.map((item) => {
        const [year, month] = item._id;

        return {
          month: dayjs(`${year}-${month}-01`).format("MMM"),
          Saldo: item.balance,
          Receitas: item.incomes,
          Gastos: item.expenses,
        };
      });
      return dataChart;
    }

    return [];
  }, [financialEvolution]);

  return (
    <ResponsiveBar
      data={data}
      keys={["Saldo", "Receitas", "Gastos"]}
      indexBy={"month"}
      colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
      groupMode="grouped"
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
      margin={{ left: 90, bottom: 33 }}
      theme={{
        text: {
          fontFamily: "lexend",
          fontSize: 9,
          fill: theme.colors.white,
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
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          translateY: 35,
          symbolSize: 12,
          itemWidth: 100,
          itemHeight: 20,
          itemTextColor: theme.colors.white,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

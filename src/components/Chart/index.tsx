import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { Container } from "./Container";

interface ChartProps {
  data: Object[];
  width: number;
  height: number;
  type: string;
  animate: boolean;
  legend: boolean;
  legendPosition: string;
  canExport: boolean;
}

const BuildChartOptions = () => ({
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
});

export const Chart = ({}: ChartProps) => {
  const options = BuildChartOptions();

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={{ options }} />
    </Container>
  );
};

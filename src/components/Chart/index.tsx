import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
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

// Chart component
export const Chart = ({}: ChartProps) => {
  // get chart options
  const options = BuildChartOptions();

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

import { useCallback, useContext, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';

// enable the exporting module
exporting(Highcharts);

import { Container } from './Container';
import { AppContext } from '../../context/AppContext';

interface ChartProps {
  title?: string;
  subtitle?: string;
}

export const Chart = ({ title, subtitle }: ChartProps) => {
  const appContext = useContext(AppContext);

  const chartOptions: Highcharts.Options = {};
  chartOptions.title = appContext.Title;
  chartOptions.legend = appContext.Legend;
  chartOptions.data = appContext.Data;
  chartOptions.axios = appContext.Axios;
  chartOptions.colours = appContext.Colours;
  chartOptions.type = appContext.Type;

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Container>
  );
};

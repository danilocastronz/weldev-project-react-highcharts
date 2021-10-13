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

  const [chartOptions, setChartOptions] = useState({
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016',
    },

    subtitle: {
      text: 'Source: thesolarfoundation.com',
    },

    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  });

  // const chartOptions: Highcharts.Options = {};
  // chartOptions.title = appContext.Title;
  // chartOptions.legend = appContext.Legend;
  // chartOptions.data = appContext.Data;
  // chartOptions.axios = appContext.Axios;
  // chartOptions.colours = appContext.Colours;
  // chartOptions.type = appContext.Type;

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Container>
  );
};

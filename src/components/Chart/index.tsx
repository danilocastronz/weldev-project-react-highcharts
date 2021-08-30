import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { BuildLegend } from '../../utils/Charts';

import { Container } from './Container';

interface ChartProps {
  title?: string;
  subtitle?: string;
}

export const Chart = ({ title, subtitle }: ChartProps) => {
  const options: Highcharts.Options = {
    title: {
      text: title,
    },
    subtitle: {
      text: subtitle,
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
        type: 'line',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: 'Manufacturing',
        type: 'line',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: 'Sales & Distribution',
        type: 'line',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        name: 'Project Development',
        type: 'line',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        name: 'Other',
        type: 'line',
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
  };

  options.legend = BuildLegend({});

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { BuildLegend } from '../../utils/Charts';

import { Container } from './Container';

interface ChartProps {
  title?: string;
  subtitle?: string;
  data: Highcharts.SeriesOptionsType[];
}

export const Chart = ({ title, subtitle, data }: ChartProps) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
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
    series: data,
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

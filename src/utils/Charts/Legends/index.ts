import * as Highcharts from 'highcharts';

interface BuildLegendProps {
  align: Highcharts.AlignValue;
  enabled: boolean;
  floating: boolean;
  labelFormat: string;
  labelFormatter: Highcharts.FormatterCallbackFunction<Highcharts.Point>;
  layout: string;
  margin: number;
  maxHeight: number;
  padding: number;
  reversed: boolean;
  shadow: boolean;
  title: { style: Highcharts.CSSObject; text: string };
  verticalAlign: Highcharts.VerticalAlignValue;
  width: number;
}

export const BuildLegend = ({
  align,
  enabled,
  floating,
  labelFormat,
  labelFormatter,
  layout,
  margin,
  maxHeight,
  padding,
  reversed,
  shadow,
  title,
  verticalAlign,
  width,
}: BuildLegendProps): Highcharts.Legend => {
  let options: Highcharts.Legend;
  options.
  
};

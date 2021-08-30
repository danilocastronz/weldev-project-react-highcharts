import * as Highcharts from 'highcharts';

interface BuildLegendProps {
  align?: Highcharts.AlignValue;
  enabled?: boolean;
  floating?: boolean;
  labelFormat?: string;
  layout?: Highcharts.OptionsLayoutValue;
  margin?: number;
  maxHeight?: number;
  padding?: number;
  reversed?: boolean;
  title?: string;
  verticalAlign?: Highcharts.VerticalAlignValue;
  width?: number;
}

export const BuildLegend = ({
  align = 'center',
  enabled = true,
  floating = false,
  labelFormat = '{name}',
  layout = 'horizontal',
  margin = 0,
  maxHeight = undefined,
  padding = 10,
  reversed = false,
  title = undefined,
  verticalAlign = 'top',
  width = undefined,
}: BuildLegendProps): Highcharts.LegendOptions => {
  return {
    align,
    enabled,
    floating,
    labelFormat,
    layout,
    margin,
    maxHeight,
    padding,
    reversed,
    title: {
      text: title,
    },
    verticalAlign,
    width,
  };
};

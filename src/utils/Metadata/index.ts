import { Metadata } from '../../types/Metadata';

import AxisMetadata from './Axis';
import ChartTypeMetadata from './ChartType';
import LegendMetadata from './Legend';
import ThemeMetadata from './Theme';
import TooltipMetadata from './Tooltip';

const AppChartMetadata: Metadata[] = [];

// enables axes customization
AppChartMetadata[AppChartMetadata.length] = AxisMetadata;

// enables legend customization
AppChartMetadata[AppChartMetadata.length] = LegendMetadata;

// enables color theme customization
AppChartMetadata[AppChartMetadata.length] = ThemeMetadata;

// enables tooltip customization
AppChartMetadata[AppChartMetadata.length] = TooltipMetadata;

// enables chart type selection
AppChartMetadata[AppChartMetadata.length] = ChartTypeMetadata;

export default AppChartMetadata;

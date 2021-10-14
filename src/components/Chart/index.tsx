import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';

import { Container } from './Container';
import { AppContext } from '../../contexts/AppContext';

// add module to export chart
exporting(Highcharts);

// listen to changes on the store
export const Chart = observer(() => {
  const appContext = useContext(AppContext);
  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={appContext.chartOptions} />
    </Container>
  );
});

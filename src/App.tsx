import { Chart, Layout, Menu } from './components';

const App = () => (
  <Layout
    chart={
      <Chart
        title="React Highcharts Demo"
        subtitle="Powered by Welcome, Developer"
      />
    }
    menu={<Menu />}
  />
);

export default App;

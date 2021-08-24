import { Chart } from './components/Chart';
import { Layout } from './components/Layout';

const App = () => (
  <Layout
    chart={<Chart title="Dan" subtitle="Castro" />}
    menu={
      <>
        <div>test</div>
      </>
    }
  />
);

export default App;

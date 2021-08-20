import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "./components/Chart/Container";
import { Layout } from "./components/Layout";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const App = () => (
  <Layout>
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  </Layout>
);

export default App;

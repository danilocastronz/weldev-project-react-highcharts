import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';

export const HeaderTitle = () => {
  return <Title variant="h4">Highcharts | Welcome, Developer</Title>;
};

const Title = styled(Typography)`
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

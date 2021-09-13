import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';

export const Footer = () => (
  <FooterContent variant="body2" color="textSecondary" align="center">
    Visualizing data with Highcharts and React - a Welcome, Developer project
  </FooterContent>
);

const FooterContent = styled(Typography)`
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

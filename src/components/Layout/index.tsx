import React from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  chart: React.ReactNode;
  menu: React.ReactNode;
}

export const Layout = ({ chart, menu }: LayoutProps) => {
  return (
    <GridLayout>
      <MenuLayout>{menu}</MenuLayout>
      <ChartLayout>{chart}</ChartLayout>
    </GridLayout>
  );
};

const GridLayout = styled.div`
  /* layout */
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  /* position */
  margin-top: 100px;
  padding: 43px;
`;

const MenuLayout = styled.div`
  grid-column: 1;
`;

const ChartLayout = styled.div`
  grid-column: 2;
`;

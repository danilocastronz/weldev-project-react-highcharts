import React from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  chart: React.ReactNode;
  menu: React.ReactNode;
}

export const Layout = ({ chart, menu }: LayoutProps) => {
  return (
    <GridLayout>
      <>{chart}</>
      <>{menu}</>
    </GridLayout>
  );
};

const GridLayout = styled.div`
  /* position */
  margin: 20%;
  /* layout */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 20px);
  grid-gap: 15px;
  justify-items: stretch;
  align-items: stretch;
  width: 100vw;
`;

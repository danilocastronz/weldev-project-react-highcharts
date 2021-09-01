import styled from '@emotion/styled';
import React from 'react';

import { MenuButton } from './MenuButton';

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuButton label="Axes" />
      <MenuButton label="Legends" />
      <MenuButton label="Title" />
      <MenuButton label="Colours" />
      <MenuButton label="Chart Type" />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > * {
    margin: 3px;
  }
`;

import styled from '@emotion/styled';

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
  flex: 1;
  flex-flow: row wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    margin: 3px;
  }
`;

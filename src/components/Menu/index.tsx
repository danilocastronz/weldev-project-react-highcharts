import styled from '@emotion/styled';

import { Button } from '../Button';

import Features from '../../utils/Features';
import { FeaturesProps } from '../../types/Features';

export const Menu = () => (
  <MenuContainer>
    {Features.map((feature: FeaturesProps) => (
      <Button
        key={feature.id}
        id={feature.id}
        label={feature.title}
        description={feature.description}
        enabled={feature.enabled}
      />
    ))}
  </MenuContainer>
);

const MenuContainer = styled.div`
  flex-flow: row wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    margin: 3px;
  }
`;

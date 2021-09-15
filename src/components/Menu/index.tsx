import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';

import Features from '../../utils/Features';
import { FeaturesProps } from '../../types/Features';

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <MenuContainer>
      {Features.map((feature: FeaturesProps) => (
        <Button
          key={feature.id}
          id={feature.id}
          label={t(`chart.${feature.id}.name`)}
          description={t(`chart.${feature.id}.description`)}
          enabled={feature.enabled}
        />
      ))}
    </MenuContainer>
  );
};

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

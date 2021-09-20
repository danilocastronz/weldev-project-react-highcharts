import React from 'react';
import styled from '@emotion/styled';

import { Button } from '../Button';
import { MenuOptions } from './MenuOptions';

import Features from '../../utils/Features';
import { Feature } from '../../types/Features';

export const Menu = () => {
  const [openOptions, setOpenOptions] = React.useState(false);
  const [openedFeature, setOpenedFeature] = React.useState<Feature | null>(null);

  const handleOpenOptions = (feature: Feature) => {
    setOpenOptions(true);
    setOpenedFeature(feature);
  };

  const handleClose = () => {
    setOpenOptions(false);
    setOpenedFeature(null);
  };

  return (
    <MenuContainer>
      {Features.sort((e) => (e.enabled ? 0 : 1)).map((feature: Feature) => (
        <Button
          key={feature.id}
          feature={feature}
          onOpenOptions={(feature: Feature) => feature.enabled && handleOpenOptions(feature)}
        />
      ))}
      {openedFeature && <MenuOptions feature={openedFeature} open={openOptions} onClose={handleClose} />}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  flex-flow: row wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

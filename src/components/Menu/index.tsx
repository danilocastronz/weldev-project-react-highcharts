import { useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '../Button';
import { MenuOptions } from './MenuOptions';

import { AppChartMetadata } from '../../utils';
import { Metadata } from '../../types/Metadata';

export const Menu = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openedItem, setOpenedItem] = useState<Metadata | null>(null);

  const handleOpenOptions = (metadata: Metadata) => {
    setOpenOptions(true);
    setOpenedItem(metadata);
  };

  const handleClose = () => {
    setOpenOptions(false);
    setOpenedItem(null);
  };

  return (
    <MenuContainer>
      {AppChartMetadata.sort((e) => (e.enabled ? -1 : 1)).map((metadata: Metadata) => (
        <Button
          key={metadata.id}
          metadata={metadata}
          onOpenOptions={() => metadata.enabled && handleOpenOptions(metadata)}
        />
      ))}
      {openedItem && <MenuOptions metadata={openedItem} open={openOptions} onClose={handleClose} />}
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

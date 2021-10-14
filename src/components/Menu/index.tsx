import { useReducer, useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '../Button';
import { MenuOptionsDialog } from './MenuOptionsDialog';

import { AppChartMetadata } from '../../utils';
import { Metadata, MetadataType } from '../../types/Metadata';
import { TitleMenuDialog } from './Dialogs';

export const Menu = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [isTitleOpened, toggleTitle] = useReducer((isOpened: boolean) => !isOpened, false);

  const [openedItem, setOpenedItem] = useState<Metadata | null>(null);

  const handleOpenOptions = (metadata: Metadata) => {
    if (metadata.type === MetadataType.Title) {
      toggleTitle();
    } else {
      setOpenOptions(true);
      setOpenedItem(metadata);
    }
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
      {openedItem && <MenuOptionsDialog metadata={openedItem} open={openOptions} onClose={handleClose} />}
      {isTitleOpened && <TitleMenuDialog open={isTitleOpened} onClose={toggleTitle} />}
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

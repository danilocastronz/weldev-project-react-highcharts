import { Button as MuiButton, Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Metadata } from '../../types/Metadata';

interface StyledButtonProps {
  enabled?: boolean;
}

interface ButtonProps {
  metadata: Metadata;
  onOpenOptions: () => void;
}

export const Button = ({ metadata, onOpenOptions }: ButtonProps) => {
  const { t } = useTranslation();

  const tooltip = metadata.enabled
    ? t(`chart.${metadata.id}.description`)
    : `${t(`chart.${metadata.id}.description`)} (${t('comingSoon')})`;

  return (
    <Tooltip key={`tooltip-${metadata.id}`} placement="bottom" title={tooltip} arrow followCursor>
      <StyledButton variant="outlined" color="primary" enabled={metadata.enabled} onClick={onOpenOptions}>
        {t(`chart.${metadata.id}.name`)}
      </StyledButton>
    </Tooltip>
  );
};

const StyledButton = styled(MuiButton)<StyledButtonProps>`
  min-width: 150px;
  margin: 7px;
  box-shadow: 0px 2px 4px -1px rgba(5, 105, 236, 0.5);
  cursor: ${(props) => (props.enabled ? 'pointer' : 'not-allowed')};
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 6px rgba(5, 105, 236, 0.5);
  }
`;

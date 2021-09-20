import { Button as MuiButton, Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Feature } from '../../types/Features';

interface StyledButtonProps {
  enabled?: boolean;
}

interface ButtonProps {
  feature: Feature;
  onOpenOptions: (feature: Feature) => void;
}

export const Button = ({ feature, onOpenOptions }: ButtonProps) => {
  const { t } = useTranslation();

  const tooltip = feature.enabled
    ? t(`chart.${feature.id}.description`)
    : `${t(`chart.${feature.id}.description`)} (${t('comingSoon')})`;

  return (
    <Tooltip key={`tooltip-${feature.id}`} placement="bottom" title={tooltip} arrow followCursor>
      <StyledButton variant="outlined" color="primary" enabled={feature.enabled} onClick={() => onOpenOptions(feature)}>
        {t(`chart.${feature.id}.name`)}
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

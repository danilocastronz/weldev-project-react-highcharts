import { useState } from 'react';
import styled from '@emotion/styled';
import { Icon, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Languages } from '../../utils';
import { LanguagesProps } from '../../types/Languages';

interface StyledLanguageIconProps {
  isSelected: boolean;
  isActive: boolean;
}

export const Translation = () => {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <TranslationWrapper>
      {Languages.sort((a, b) => a.index - b.index)
        .sort((e) => (e.active ? 0 : 1))
        .map((item: LanguagesProps) => (
          <Tooltip key={`tooltip-${item.code}`} placement="bottom" title={item.name}>
            <StyledLanguageIcon
              key={`icon-${item.code}`}
              onClick={() => (item.active ? handleLanguageChange(item.code) : null)}
              isSelected={language === item.code}
              isActive={item.active}
            >
              {item.flag}
            </StyledLanguageIcon>
          </Tooltip>
        ))}
    </TranslationWrapper>
  );
};

const TranslationWrapper = styled.div`
  > * {
    margin: 0 3px;
  }
`;

const StyledLanguageIcon = styled(Icon)<StyledLanguageIconProps>(
  (props) => `
  height: auto;
  width: auto;
  opacity: ${props.isSelected ? 1 : 0.5};
  font-size: ${props.isSelected ? '1.6rem' : '1.2rem'};
  cursor: ${props.isActive ? 'pointer' : 'not-allowed'};
  :hover {
    opacity: ${props.isActive ? 1 : 0.6};
    font-size: ${props.isActive ? '1.6rem' : '1.2rem'};
    transition: opacity 0.2s ease-in-out;
  }
  `,
);

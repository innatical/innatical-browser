import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces';

type EmptySectionProps = {
  theme?: ITheme;
};

export const EmptySection = styled.div<EmptySectionProps>`
  margin-top: 16px;
  padding: 0 0 8px 0;
  overflow: hidden;
  border-radius: 8px;

  &:first-child {
    margin-top: 0;
  }

  ${({ theme }) => css`
    background-color: ${theme['pages.lightForeground']
      ? 'rgba(255, 255, 255, 0.05)'
      : '#fafafa'};
  `};
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  padding: 16px 24px;
  font-weight: 500;
`;

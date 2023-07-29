import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces';

export const StyledTopSites = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  grid-gap: 6px;
  margin-top: 20px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, auto);
  }
`;

export const ItemBase = styled.div`
  border-radius: 10px;
  width: 120px;
  height: 90px;
`;

type PlaceholderProps = {
  theme?: ITheme;
};

export const Placeholder = styled(ItemBase)<PlaceholderProps>`
  box-sizing: border-box;

  ${({ theme }) => css`
    border: 2px dashed
      ${!theme['pages.lightForeground']
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(255, 255, 255, 0.3)'};
  `}
`;

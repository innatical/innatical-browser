import styled, { css } from 'styled-components';
import { Button } from '../ToolbarButton/style';
import { ITheme } from '~/interfaces';
import { contrast } from '~/utils/colors';

interface BookmarkBarProps {
  theme: ITheme;
  color?: string;
}

export const BookmarkBar = styled.div<BookmarkBarProps>`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  min-height: 32px;
  padding: 0 4px 2px 8px;
  ${({theme, color}) => css`
    margin-top: ${theme.isCompact ? 0 : -1}px;
    background-color: ${!!color ? color : theme['titlebar.backgroundColor']};
  `};

  ${({color, theme}) => {
    if (color && color !== '') {
      const cc = contrast(color);

      const isDarkMode = theme['toolbar.lightForeground'];
      switch (cc) {
        case 'dark':
          if (isDarkMode) {
            return css`
              color: #fff;
            `;
          } else {
            return css`
              color: #e5e5e5;
            `;
          }
        case 'light': {
          if (isDarkMode) {
            return css`
              color: #000;
            `;
          } else {
            return css``;
          }
        }
      }
    }
    return css`
      color: ${theme['addressbar.textColor']};
    `;
  }}

  transition: background-color 0.4s, color 0.4s;
  transition-timing-function: ease-out;
`;

export const BookmarkSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  overflow: hidden;
`;

type BookmarkButtonProps = {
  width: number;
};
export const BookmarkButton = styled(Button)<BookmarkButtonProps>`
  max-width: ${({ width }) => width}px;
  width: auto;
  padding: 4px;
  margin: 0 2px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.div`
  min-width: 0;
  max-width: 125px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px 0 0;
`;

export const Favicon = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
  margin-left: 4px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

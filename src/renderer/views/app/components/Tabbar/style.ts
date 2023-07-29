import styled, { css } from 'styled-components';
import { platform } from 'os';

import { ToolbarButton } from '../ToolbarButton';
import {
  TOOLBAR_BUTTON_WIDTH,
  ADD_TAB_BUTTON_WIDTH,
  ADD_TAB_BUTTON_HEIGHT,
} from '~/constants/design';
import { ITheme } from '~/interfaces';

export const StyledTabbar = styled.div<{
  color: string;
  theme: ITheme;
}>`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  align-items: center;
  margin-right: 10px;
  display: flex;
  margin-left: 10px;

  ${({ color, theme }) => css`
    background-color: ${color ? color : theme['titlebar.backgroundColor']};
  `};

  transition: background-color 0.4s, color 0.4s;
  transition-timing-function: ease-out;
`;

/* &:hover {
    ${({ theme }: { theme?: ITheme }) => css`
      &::-webkit-scrollbar-thumb {
        background-color: ${theme['toolbar.lightForeground']
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(0, 0, 0, 0.2)'};

        &:hover {
          background-color: ${theme['toolbar.lightForeground']
            ? 'rgba(255, 255, 255, 0.3)'
            : 'rgba(0, 0, 0, 0.3)'};
        }
      }
    `};
  } */

export const TabsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  overflow-x: overlay;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 0;
    display: none;
    background-color: transparent;
    opacity: 0;
  }
`;

type AddTabProps = {
  theme: ITheme;
};

export const AddTab = styled(ToolbarButton)<AddTabProps>`
  position: absolute;
  left: 0;
  min-width: ${ADD_TAB_BUTTON_WIDTH}px;
  height: ${ADD_TAB_BUTTON_HEIGHT}px;

  ${({ theme }) => css`
    top: ${theme.isCompact ? 'auto' : theme.tabMarginTop + 2}px;
  `};
`;

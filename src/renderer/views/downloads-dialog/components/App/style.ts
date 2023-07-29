import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces';
import { DialogStyle } from '~/renderer/mixins/dialogs';

type StyledAppProps = {
  theme?: ITheme;
  visible: boolean;
};

export const StyledApp = styled(DialogStyle)<StyledAppProps>`
  overflow: overlay;
  padding: 8px;
  font-size: 13px;

  ${({ theme }) => css`
    &::-webkit-scrollbar {
      width: 6px;
      -webkit-app-region: no-drag;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme['dialog.lightForeground']
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(0, 0, 0, 0.2)'};

      &:hover {
        background-color: ${theme['dialog.lightForeground']
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(0, 0, 0, 0.3)'};
      }
    }
    color: ${theme['dialog.lightForeground'] ? 'white' : 'black'};
  `};
`;

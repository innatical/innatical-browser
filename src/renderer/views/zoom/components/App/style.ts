import styled, { css } from 'styled-components';

import { ITheme } from '~/interfaces';
import { DialogStyle } from '~/renderer/mixins/dialogs';

type StyledAppProps = {
  theme?: ITheme;
  visible: boolean;
};

export const StyledApp = styled(DialogStyle)<StyledAppProps>`
  padding: 16px;

  ${({ theme }) => css`
    color: ${theme['dialog.lightForeground'] ? '#fff' : '#000'};
  `}
`;

export const Label = styled.div`
  font-size: 16px;
  min-width: 45px;
  text-align: center;
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & .button:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

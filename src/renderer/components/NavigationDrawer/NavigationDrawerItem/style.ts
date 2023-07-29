import styled, { css } from 'styled-components';

import { centerIcon } from '~/renderer/mixins';
import { ITheme } from '~/interfaces';
import { transparency } from '~/renderer/constants';

type NavigationDrawerItemProps = {
  theme?: ITheme;
  global?: boolean;
  selected?: boolean;
}

export const StyledNavigationDrawerItem = styled.div<NavigationDrawerItemProps>`
  display: flex;
  height: 40px;
  align-items: center;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  ${({ theme, global, selected }) => css`
    &:hover {
      background-color: ${global ? 'transparent' : theme['backgroundColor']};
    }

    ${selected &&
    !global && {
      backgroundColor: theme['backgroundColor'],
    }}

    ${selected &&
    global && {
      color: '#1E6FEB',
    }}

    ${global && {
      fontSize: '18px',
    }}
    padding-left: ${global ? '0' : '10px'};
    padding-right: ${global ? '0' : '10px'};
    justify-content: ${global ? 'center' : 'left'};
  `};
`;

export const Icon = styled.div`
  height: 24px;
  opacity: ${transparency.icons.inactive};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${centerIcon(20)};
`;

import styled, { css } from 'styled-components';

import { ITheme } from '~/interfaces';
import { BLUE_500 } from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';

export const Control = css`
  height: 42px;
  position: relative;
  border: none;
  outline: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;

  &:focus {
    box-shadow: 0 0 0 2px ${BLUE_500};
  }

  ${({ theme }: { theme: ITheme }) => css`
    background-color: ${theme['control.backgroundColor']};
    color: ${theme['control.valueColor']};
  `}
`;

export const Input = styled.input.attrs(() => ({
  spellCheck: false,
}))`
  ${Control};
`;

type DropdownProps = {
  dark: boolean;
};

export const Dropdown = styled.div<DropdownProps>`
  ${Control}

  &:after {
    content: '';
    position: absolute;
    right: 4px;
    height: 20px;
    width: 20px;
    ${centerIcon()};

    ${({ dark }) => css`
      filter: ${dark ? 'invert(100%)' : 'none'};
    `}
  }
`;

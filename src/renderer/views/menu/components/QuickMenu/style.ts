import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces';
import { centerIcon } from '~/renderer/mixins';
import { ICON_ARROW_RIGHT } from '~/renderer/constants/icons';

type LineProps = {
  theme?: ITheme;
}
export const Line = styled.div<LineProps>`
  height: 1px;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    background-color: ${theme['dialog.separator.color']};
  `};
`;

type MenuItemProps = {
  arrow?: boolean;
  disabled?: boolean;
  theme?: ITheme;
}

export const MenuItem = styled.div<MenuItemProps>`
  height: 36px;
  align-items: center;
  display: flex;
  position: relative;
  padding: 0 12px;
  font-size: 12px;
  border-radius: 4px;

  ${({ arrow }) =>
    arrow &&
    css`
      &:after {
        content: '';
        position: absolute;
        right: 4px;
        width: 24px;
        height: 100%;
        opacity: 0.54;
        ${centerIcon(20)};
        ${({ theme }) => css`
          filter: ${theme['dialog.lightForeground'] ? 'invert(100%)' : 'none'};
        `};
      }
    `};

  ${({ disabled }: { arrow?: boolean; disabled?: boolean }) =>
    css`
      pointer-events: ${disabled ? 'none' : 'inherit'};
      opacity: ${disabled ? 0.54 : 1};
    `};

  &:hover {
    ${({ theme }: { theme?: ITheme }) => css`
      background-color: ${theme['dialog.lightForeground']
        ? 'rgba(255, 255, 255, 0.06)'
        : 'rgba(0, 0, 0, 0.03)'};
    `};
  }
`;

export const MenuItemTitle = styled.div`
  flex: 1;
`;

type MenuItemsProps = {
  theme?: ITheme
}
export const MenuItems = styled.div<MenuItemsProps>`
  flex: 1;
  overflow: hidden;
  padding: 10px;
  ${({ theme }) => css`
    background-color: ${theme['dialog.backgroundColor']};
    color: ${theme['dialog.textColor']};
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`;

type IconProps = {
  theme?: ITheme;
}
export const Icon = styled.div<IconProps>`
  margin-right: 12px;
  width: 20px;
  height: 20px;
  ${centerIcon()};
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;

  ${({ theme }) => css`
  `};
`;

export const RightControl = styled.div`
  margin-right: 18px;
`;

export const Shortcut = styled(RightControl)`
  opacity: 0.54;
`;

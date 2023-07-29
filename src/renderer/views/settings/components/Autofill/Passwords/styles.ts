import styled, { css } from 'styled-components';

import {
  transparency,
  ICON_INVISIBLE,
  ICON_VISIBLE,
  ICON_MORE,
} from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';
import { ITheme } from '~/interfaces';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 16px;
`;

export const Label = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeaderLabel = styled(Label)`
  opacity: 0.54;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;


type IconProps = {
  icon: string;
}

export const Icon = styled.div<IconProps>`
  width: 16px;
  height: 16px;
  ${centerIcon('contain')};

  ${({ icon }) => css`
    background-image: url(${icon});
  `};
`;

type PasswordIconProps = {
  theme: ITheme;
}

export const PasswordIcon = styled.div<PasswordIconProps>`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 12px;
  opacity: ${transparency.icons.inactive};
  cursor: pointer;
  transition: 0.15s background-image;
  ${centerIcon('contain')};

  ${({ theme }) => css`
    filter: ${theme.dark ? 'invert(100%)' : 'none'};
  `};
`;
interface MoreProps {
  theme: ITheme;
}

export const More = styled.div<MoreProps>`
  width: 24px;
  height: 24px;
  opacity: ${transparency.icons.inactive};
  cursor: pointer;
  ${centerIcon(20)};

  ${({ theme }: { theme: ITheme }) => css`
    filter: ${theme.dark ? 'invert(100%)' : 'none'};
  `};
`;

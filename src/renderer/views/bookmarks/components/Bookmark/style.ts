import styled, { css } from 'styled-components';

import { centerIcon } from '~/renderer/mixins';
import { ITheme } from '~/interfaces';
import { ICON_MORE } from '~/renderer/constants/icons';

interface MoreProps {
  theme: ITheme;
}

export const More = styled.div<MoreProps>`
  ${centerIcon(20)};
  height: 24px;
  width: 24px;
  cursor: pointer;
  opacity: 0.54;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    filter: ${theme['pages.lightForeground'] ? 'invert(0%)' : 'none'};
  `}
  &:hover {
    opacity: 1;
  }
`;

type FaviconProps = {
  theme?: ITheme;
}

export const Favicon = styled.div<FaviconProps>`
  ${centerIcon()};
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  margin-right: 24px;
  ${({ theme }) => css`
    filter: ${theme['dialog.lightForeground'] ? 'invert(100%)' : ''};
  `}
`;

interface TitleProps {
  theme: ITheme;
}

export const Title = styled.div<TitleProps>`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 16px;

  ${({ theme }) => css`
    color: ${theme['pages.lightForeground'] ? '#fff' : '#000'};
  `}
`;

export const Site = styled.div`
  flex: 1;
  opacity: 0.54;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

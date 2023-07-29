import styled, { css } from 'styled-components';
import { BLUE_500, ICON_PAGE, ICON_MORE } from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';
import { ITheme } from '~/interfaces';

type DownloadItemProps = {
  theme?: ITheme;
}

export const StyledDownloadItem = styled.div<DownloadItemProps>`
  height: 64px;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 8px;
  transition: 0.1s background-color, 0.1s border;

  ${({ theme }) => css`
    background-color: ${theme['dialog.lightForeground']
      ? `rgba(255, 255, 255, 0.04)`
      : `rgba(0, 0, 0, 0.02)`};

    &:hover {
      background-color: ${theme['dialog.lightForeground']
        ? `rgba(255, 255, 255, 0.06)`
        : `rgba(0, 0, 0, 0.04)`};
    }
  `}

  &:first-child {
    margin-top: 0;
  }
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SecondaryText = styled.div`
  opacity: 0.54;
  font-size: 11px;
  margin-top: 4px;
`;

export const Progress = styled.div`
  height: 100%;
  background-color: ${BLUE_500};
  border-radius: 16px;
`;

type ProgressBackgroundProps = {
  theme?: ITheme;
}
export const ProgressBackground = styled.div<ProgressBackgroundProps>`
  height: 5px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  overflow: hidden;
  margin-top: 4px;
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme['dialog.lightForeground']
      ? `rgba(255, 255, 255, 0.12)`
      : `rgba(0, 0, 0, 0.12)`};
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type IconProps = {
  theme?: ITheme
}

export const Icon = styled.div<IconProps>`
  width: 24px;
  height: 24px;
  ${centerIcon()};
  margin-right: 16px;
  opacity: 0.54;
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    filter: ${theme['dialog.lightForeground'] ? 'invert(0%)' : ''};
  `}
`;

type MoreButtonProps = {
  theme?: ITheme;
}

export const MoreButton = styled.div<MoreButtonProps>`
  width: 36px;
  height: 36px;
  ${centerIcon(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.54;
  margin-right: 8px;
  border-radius: 6px;
  transition: 0.1s background-color;

  ${({ theme }) => css`
    filter: ${theme['dialog.lightForeground'] ? 'invert(0%)' : ''};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

type SeperatorProps = {
  theme?: ITheme;
}

export const Separator = styled.div<SeperatorProps>`
  height: 48px;
  width: 1px;
  margin-left: 16px;
  margin-right: 8px;
  background-color: rgba(0, 0, 0, 0.12);

  ${({ theme }) => css`
    background-color: ${theme['dialog.lightForeground']
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.12)'};
  `}
`;

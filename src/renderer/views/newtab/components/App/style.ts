import styled, { css } from 'styled-components';
import { centerIcon } from '~/renderer/mixins';

import { ContextMenuRow } from '~/renderer/components/ContextMenu';
import { ITheme } from '~/interfaces';
import { contrast } from '~/utils/colors';

type ImageProps = {
  src?: string;
};

export const Image = styled.div<ImageProps>`
  position: absolute;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s opacity, 1s transform;

  ${({ src }) => css`
    opacity: ${src === '' ? 0 : 1};
    transform: ${src === '' ? 'scale(1.05)' : 'scale(1)'};
    background-image: url(${src});
    background-attachment: fixed;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      background-image: radial-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
    }
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100vh;

  ${({ color, theme }) => {
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
              color: #fff;
            `;
          }
        case 'light': {
          if (isDarkMode) {
            return css``;
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
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: calc(100% - 64px);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1366px;
  position: relative;
  min-height: 97px;
  z-index: 3;
`;

export const StyledH2 = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  margin-top: 30px;
`;
export const StyledForecast = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;

export const RightBar = styled.div`
  position: absolute;
  display: flex;
  right: 32px;
  flex-flow: column;
  height: 100%;
  padding-top: 32px;
`;

export const Menu = styled.div`
  display: flex;
  position: absolute;
  flex-flow: row;
  justify-content: center;
  width: 100%;
  bottom: 32px;
`;

export const StyledTime = styled.div`
  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 900;
  }
`;

export const StyledSearchBar = styled.input<{
  backgroundColor: string;
}>`
  border-radius: 10px;
  margin-top: 30px;
  width: 450px;
  padding: 18px;
  border: 0;
  color: #fff;
  &::placeholder {
    color: #aaa;
  }
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
`;

type IconItemProps = {
  theme?: ITheme;
}

export const IconItem = styled.div<IconItemProps>`
  width: 34px;
  height: 34px;
  margin-left: 16px;
  opacity: 0.8;
  z-index: 3;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }

  ${({ theme }) => css`
    &:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      ${centerIcon(20)};
      filter: invert(100%);
    }
  `};
`;

export const Refresh = styled(IconItem)`
  position: absolute;
  top: 32px;
  right: 32px;
  margin-top: 0;
`;

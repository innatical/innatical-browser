import styled, { css } from 'styled-components';
import { centerIcon } from '~/renderer/mixins';
import { transparency, ICON_DROPDOWN } from '~/renderer/constants';
import { ITheme } from '~/interfaces';

interface SectionProps {
  theme?: ITheme;
}

export const StyledSection = styled.div<SectionProps>`
  width: 100%;
  border-radius: 4px;
  margin-top: 12px;

  ${({ theme }) => css`
    background-color: ${theme['pages.lightForeground']
      ? 'rgba(255, 255, 255, 0.04)'
      : 'rgba(0, 0, 0, 0.04)'};
  `};
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

type IconProps = {
  icon: string;
  theme?: ITheme;
}

export const Icon = styled.div<IconProps>`
  width: 18px;
  height: 18px;
  opacity: ${transparency.icons.inactive};
  margin-left: 16px;
  ${centerIcon('contain')};

  ${({ icon, theme }) => css`
    background-image: url(${icon});
    filter: ${theme['pages.lightForeground'] ? 'invert(100%)' : 'none'};
  `};
`;

export const Label = styled.div`
  margin-left: 16px;
  font-size: 14px;
`;

interface DropIconProps {
  expanded: boolean;
  theme?: ITheme;
}
export const DropIcon = styled.div<DropIconProps>`
  width: 20px;
  height: 20px;
  opacity: ${transparency.icons.inactive};
  margin-left: auto;
  margin-right: 16px;
  ${centerIcon('contain')};

  ${({ expanded, theme }) => css`
    transform: ${expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    filter: ${theme['pages.lightForeground'] ? 'invert(100%)' : 'none'};
  `}
`;
interface ContainerProps {
  expanded: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  padding: 0px 16px 16px;

  ${({expanded}) => css`
    display: ${expanded ? 'block' : 'none'};
  `};
`;

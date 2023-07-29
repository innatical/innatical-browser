import styled, { css } from 'styled-components';

import { interRegular, noButtons } from '~/renderer/mixins';
import { transparency } from '~/renderer/constants';

export const StyledList = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 0;
  overflow: hidden;
  ${noButtons()};
`;

type StyledItemProps = {
  subtext: boolean;
};

export const StyledItem = styled.div<StyledItemProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  ${({ subtext }: { subtext: boolean }) => css`
    height: ${subtext ? 56 : 32}px;
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const Text = styled.div`
  padding: 0 12px;
  font-size: 14px;
  pointer-events: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  ${interRegular()};
`;

export const SubText = styled(Text)`
  margin-top: 4px;
  font-size: 13px;
  color: rgba(0, 0, 0, ${transparency.text.medium});
`;

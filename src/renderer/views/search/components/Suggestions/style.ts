import styled, { css } from 'styled-components';

type StyledSuggestionsProps = {
  visible: boolean;
};
export const StyledSuggestions = styled.div<StyledSuggestionsProps>`
  width: 100%;
  overflow: hidden;
  ${({ visible }) => css`
    display: ${visible ? 'block' : 'none'};
  `};
`;

import styled, { css } from "styled-components";

export const LabelBase = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.medium};
    line-height: 36px;
    color: ${theme.colors.primary};
  `}
`;

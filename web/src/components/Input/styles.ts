import styled, { css } from "styled-components";

interface IIconWrapper {
  position: "left" | "right";
}

export const InputWrapper = styled.div`
  position: relative;
  width: 350px;
`;

export const InputBase = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    padding: 20px 20px 20px calc(20px + 30px);
    font-size: ${theme.fonts.size.sm};
    font-weight: ${theme.fonts.weight.medium};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.sm};

    &::placeholder {
      font-weight: ${theme.fonts.weight.medium};
      color: ${theme.colors.black};
    }

    &:focus {
      outline: 1px solid ${theme.colors.primary};
    }
  `}
`;

export const IconWrapper = styled.div<IIconWrapper>`
  ${({ position }) => css`
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    ${position}: 20px;
    width: calc(20px + 16px);
    z-index: 1;
    box-sizing: border-box;
    right: 0;
  `}
`;

import { InputHTMLAttributes } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useTogglePasswordVisibility from "../../hooks/useTogglePasswordVisibility";
import { IconWrapper, InputBase, InputWrapper } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isPassword?: boolean;
}

export default function Input({
  iconLeft,
  isPassword = false,
  ...rest
}: IInput) {
  const [showPassword, togglePasswordVisibility] =
    useTogglePasswordVisibility();

  const type = isPassword ? (showPassword ? "text" : "password") : "text";

  const passwordIcon = (
    <IconWrapper position="right" onClick={togglePasswordVisibility}>
      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
    </IconWrapper>
  );

  return (
    <InputWrapper>
      {iconLeft && <IconWrapper position="left">{iconLeft}</IconWrapper>}
      <InputBase type={type} {...rest} />
      {isPassword && passwordIcon}
    </InputWrapper>
  );
}

import { useState } from "react";

export default function useTogglePasswordVisibility() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return [showPassword, togglePasswordVisibility] as const;
}

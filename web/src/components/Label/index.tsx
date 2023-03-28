import { LabelHTMLAttributes, ReactNode } from "react";
import { LabelBase } from "./styles";

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({ children, ...rest }: ILabel) {
  return <LabelBase>{children}</LabelBase>;
}

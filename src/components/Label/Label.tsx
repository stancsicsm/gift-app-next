import type { ElementType, PropsWithChildren } from "react";
import { getLabelStyles } from "@/components/Label/styles";

export type LabelProps = PropsWithChildren<{
  size?: "small" | "medium" | "large" | "x-large";
  color?: "dark" | "light" | "subtle" | "primary";
  weight?: "regular" | "bold";
  as?: ElementType;
}>;

const Label = ({ size, color, weight, children, as = "p" }: LabelProps) => {
  const Component = as;

  return (
    <Component className={getLabelStyles({ size, color, weight })}>
      {children}
    </Component>
  );
};

export default Label;

import clsx from "clsx";
import type { ElementType, PropsWithChildren } from "react";
import { getLabelStyles } from "@/components/Label/styles";
import type { PropsWithClassName } from "@/utils/type-utils";

export type LabelProps = PropsWithClassName<
  PropsWithChildren<{
    size?: "small" | "medium" | "large" | "x-large";
    subtle?: boolean;
    weight?: "regular" | "semi-bold" | "bold";
    as?: ElementType;
  }>
>;

const Label = ({
  size,
  subtle,
  weight,
  children,
  as = "p",
  className,
}: LabelProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(getLabelStyles({ size, subtle, weight }), className)}
    >
      {children}
    </Component>
  );
};

export default Label;

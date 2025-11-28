import clsx from "clsx";
import type { ElementType, PropsWithChildren } from "react";
import { getLabelStyles } from "@/components/Label/styles";
import type { PropsWithClassName } from "@/utils/type-utils";

export type LabelProps = PropsWithClassName<
  PropsWithChildren<{
    size?: "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
    subtle?: boolean;
    weight?: "regular" | "semi-bold" | "bold";
    noLineBreak?: boolean;
    as?: ElementType;
    onClick?: () => void;
  }>
>;

const Label = ({
  size,
  subtle,
  weight,
  noLineBreak,
  children,
  as = "p",
  onClick,
  className,
}: LabelProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        getLabelStyles({ size, subtle, weight }),
        {
          "overflow-hidden overflow-ellipsis whitespace-nowrap": noLineBreak,
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Label;

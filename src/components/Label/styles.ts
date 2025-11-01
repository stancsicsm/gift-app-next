import clsx from "clsx";
import type { LabelProps } from "@/components/Label/Label";

export const getLabelStyles = ({
  size = "medium",
  subtle = false,
  weight = "regular",
}: Pick<LabelProps, "size" | "subtle" | "weight">) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-md",
    large: "text-lg",
    "x-large": "text-xl",
  };

  const weightClasses = {
    regular: "font-normal",
    "semi-bold": "font-semibold",
    bold: "font-bold",
  };

  return clsx(
    size ? sizeClasses[size] : undefined,
    weight ? weightClasses[weight] : undefined,
    subtle ? "text-accent-content" : undefined,
  );
};

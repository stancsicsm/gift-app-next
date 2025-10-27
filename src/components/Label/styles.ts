import clsx from "clsx";
import type { LabelProps } from "@/components/Label/Label";

export const getLabelStyles = ({
  size = "medium",
  color = "dark",
  weight = "regular",
}: Pick<LabelProps, "size" | "color" | "weight">) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    "x-large": "text-xl",
  };

  const colorClasses = {
    dark: "text-gray-900",
    light: "text-white",
    subtle: "text-gray-500",
    primary: "text-primary",
  };

  const weightClasses = {
    regular: "font-normal",
    bold: "font-bold",
  };

  return clsx(
    size ? sizeClasses[size] : undefined,
    color ? colorClasses[color] : undefined,
    weight ? weightClasses[weight] : undefined,
  );
};

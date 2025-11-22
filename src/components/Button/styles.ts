import clsx from "clsx";
import type { ButtonProps } from "@/components/Button/Button";
import { assertUnreachable } from "@/utils/assert-unreachable";

const GRADIENT_COMMON_CLASSES =
  "hover:brightness-90 active:brightness-90 transition-all duration-200 ease-in-out";

export const getButtonVariant = ({
  variant,
}: Required<Pick<ButtonProps, "variant">>) => {
  switch (variant) {
    case "primary":
      return "btn-primary";
    case "primary-gradient":
      return clsx(
        "btn-primary bg-primary-gradient border-0",
        GRADIENT_COMMON_CLASSES,
      );
    case "primary-outline":
      return "btn-primary btn-outline";
    case "secondary":
      return "btn-secondary";
    case "light":
      return "";
    case "ghost":
      return "btn-ghost";
    case "danger":
      return "btn-error";
    case "danger-gradient":
      return clsx(
        "btn-error bg-danger-gradient border-0",
        GRADIENT_COMMON_CLASSES,
      );
    case "disabled":
      return "btn-disabled";
    default:
      assertUnreachable(variant);
  }
};

export const getButtonSize = ({
  size,
}: Required<Pick<ButtonProps, "size">>) => {
  switch (size) {
    case "small":
      return "btn-sm";
    case "medium":
      return "btn-md";
    case "large":
      return "btn-lg";
    default:
      assertUnreachable(size);
  }
};

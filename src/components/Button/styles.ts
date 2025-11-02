import type { ButtonProps } from "@/components/Button/Button";
import { assertUnreachable } from "@/utils/assert-unreachable";

export const getButtonVariant = ({
  variant,
}: Required<Pick<ButtonProps, "variant">>) => {
  switch (variant) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "light":
      return "";
    case "ghost":
      return "btn-ghost";
    case "danger":
      return "btn-error";
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

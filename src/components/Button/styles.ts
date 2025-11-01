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

import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { getButtonSize, getButtonVariant } from "@/components/Button/styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "light" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
};

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "btn",
        getButtonVariant({ variant }),
        getButtonSize({ size }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

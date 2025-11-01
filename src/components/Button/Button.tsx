import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "light" | "ghost" | "danger";
};

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-ghost": variant === "ghost",
          "btn-error": variant === "danger",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

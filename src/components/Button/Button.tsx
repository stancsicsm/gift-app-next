import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
};

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx("btn", {
        "btn-primary": variant === "primary",
        "btn-secondary": variant === "secondary",
        "btn-ghost": variant === "ghost",
        "btn-error": variant === "danger",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

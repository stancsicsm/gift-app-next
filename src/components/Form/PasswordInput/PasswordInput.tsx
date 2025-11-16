"use client";

import { Eye, EyeOff, KeyRound } from "lucide-react";
import { useState } from "react";
import Label from "@/components/Label/Label";

type PasswordInputProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  errorMessage?: string;
  formData?: FormData;
};

const PasswordInput = ({
  label = "Password",
  name = "password",
  placeholder = "Password",
  errorMessage = "Please enter your password",
  formData,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const defaultValue = formData?.get(name);
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    <div>
      <Label size="large" className="pb-1">
        {label}
      </Label>
      <label className="input input-lg validator w-full">
        <KeyRound />
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          required
          minLength={1}
          defaultValue={validDefaultValue}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </label>
      <p className="validator-hint hidden text-error-content text-base">
        {errorMessage}
      </p>
    </div>
  );
};

export default PasswordInput;

import { KeyRound } from "lucide-react";
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
  const defaultValue = formData?.get(name);
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    // TODO: add show password toggle
    <div>
      <Label size="large" className="pb-1">
        {label}
      </Label>
      <label className="input input-lg validator w-full">
        <KeyRound />
        <input
          name={name}
          type="password"
          placeholder={placeholder}
          required
          minLength={1}
          defaultValue={validDefaultValue}
        />
      </label>
      <p className="validator-hint hidden text-error-content text-base">
        {errorMessage}
      </p>
    </div>
  );
};

export default PasswordInput;

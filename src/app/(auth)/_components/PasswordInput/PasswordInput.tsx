import { KeyRound } from "lucide-react";
import Label from "@/components/Label/Label";

type PasswordInputProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  errorMessage?: string;
};

const PasswordInput = ({
  label = "Password",
  name = "password",
  placeholder = "Password",
  errorMessage = "Please enter your password",
}: PasswordInputProps) => (
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
      />
    </label>
    <div className="validator-hint hidden badge badge-xl badge-error">
      <Label className="text-error-content">{errorMessage}</Label>
    </div>
  </div>
);

export default PasswordInput;

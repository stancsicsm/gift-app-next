import type { ReactNode } from "react";
import Label from "@/components/Label/Label";

type TextInputProps = {
  label: string;
  name: string;
  placeholder: string;
  errorMessage?: string;
  required: boolean;
  iconSlot?: ReactNode;
  formData?: FormData;
};

const TextInput = ({
  label,
  name,
  placeholder,
  errorMessage,
  required,
  iconSlot,
  formData,
}: TextInputProps) => {
  const defaultValue = formData?.get(name);
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    <div>
      <Label size="large" className="pb-1">
        {label}
      </Label>
      <label className="input input-lg validator w-full rounded-xl">
        {iconSlot}
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          required={required}
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

export default TextInput;

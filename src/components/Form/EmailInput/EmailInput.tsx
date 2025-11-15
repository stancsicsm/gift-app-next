import { Mail } from "lucide-react";
import Label from "@/components/Label/Label";

type EmailInputProps = {
  formData?: FormData;
};

const EmailInput = ({ formData }: EmailInputProps) => {
  const defaultValue = formData?.get("email");
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    <div>
      <Label size="large" className="pb-1">
        Email Address
      </Label>
      <label className="input input-lg validator w-full">
        <Mail />
        <input
          name="email"
          type="email"
          placeholder="email@example.com"
          required
          defaultValue={validDefaultValue}
        />
      </label>
      <p className="validator-hint hidden text-error-content text-base">
        Please enter a valid email address
      </p>
    </div>
  );
};

export default EmailInput;

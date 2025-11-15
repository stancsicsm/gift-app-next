import { User } from "lucide-react";
import Label from "@/components/Label/Label";

type NameInputProps = {
  formData?: FormData;
};

const NameInput = ({ formData }: NameInputProps) => {
  const defaultValue = formData?.get("name");
  const validDefaultValue =
    typeof defaultValue === "string" ? defaultValue : undefined;

  return (
    <div>
      <Label size="large" className="pb-1">
        Name
      </Label>
      <label className="input input-lg validator w-full">
        <User />
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          minLength={1}
          defaultValue={validDefaultValue}
        />
      </label>
      <div className="validator-hint hidden badge badge-xl badge-error">
        <Label className="text-error-content">Please enter your name</Label>
      </div>
    </div>
  );
};

export default NameInput;

import { Mail } from "lucide-react";
import Label from "@/components/Label/Label";

const EmailInput = () => (
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
      />
    </label>
    <div className="validator-hint hidden badge badge-xl badge-error">
      <Label className="text-error-content">
        Please enter a valid email address
      </Label>
    </div>
  </div>
);

export default EmailInput;

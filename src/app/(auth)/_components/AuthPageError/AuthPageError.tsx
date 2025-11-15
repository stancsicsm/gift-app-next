import { CircleX } from "lucide-react";
import Label from "@/components/Label/Label";

type AuthPageErrorProps = {
  errorMessage?: string;
};

const AuthPageError = ({ errorMessage }: AuthPageErrorProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 alert alert-error rounded-full">
      <CircleX />
      <Label className="text-error-content">{errorMessage}</Label>
    </div>
  );
};

export default AuthPageError;

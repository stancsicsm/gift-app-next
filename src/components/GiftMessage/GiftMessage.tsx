import { Gift } from "lucide-react";
import Label from "@/components/Label/Label";

type GiftMessageProps = {
  message: string;
};

const GiftMessage = ({ message }: GiftMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 gap-2">
      <Gift
        size={64}
        // accent-content color
        color="#677389"
      />
      <Label size="x-large" subtle>
        {message}
      </Label>
    </div>
  );
};

export default GiftMessage;

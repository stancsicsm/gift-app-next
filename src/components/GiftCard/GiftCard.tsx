import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { getGiftButtonVariant } from "@/utils/get-gift-button-variant";

type GiftCardProps = {
  title: string;
  imageUrl?: string;
  requestedByName?: string;
  reservedBy: "me" | "other" | null;
  onButtonClick?: () => void;
  buttonSlot?: ReactNode;
};

const GiftCard = ({
  title,
  imageUrl,
  requestedByName,
  reservedBy,
  onButtonClick,
  buttonSlot,
}: GiftCardProps) => {
  return (
    <div className="card flex-row w-full bg-base-200 shadow-sm">
      <div className="p-4">
        <Image
          src={imageUrl ?? "/gift-placeholder.svg"}
          alt={title}
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-xl object-cover"
        />
      </div>
      <div className="card-body p-4 pl-0 min-w-0 flex-1">
        <div className="flex flex-col gap-0.5">
          <Label size="large" weight="semi-bold" noLineBreak>
            {title}
          </Label>
          {requestedByName && (
            <Label size="medium" subtle noLineBreak>
              Requested by {requestedByName}
            </Label>
          )}
        </div>
        <div
          className="card-actions mt-auto w-fit"
          onClick={(e) => e.preventDefault()}
        >
          {buttonSlot ? (
            buttonSlot
          ) : (
            <Button
              onClick={onButtonClick}
              variant={getGiftButtonVariant(reservedBy)}
              disabled={reservedBy === "other"}
            >
              {reservedBy === "me" ? "Cancel" : "Reserve"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftCard;

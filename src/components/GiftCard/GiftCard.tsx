import clsx from "clsx";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";

type GiftCardProps = {
  title: string;
  requestedByName: string;
  reservedBy: "me" | "other" | null;
  imageSrc?: string;
  onButtonClick?: () => void;
};

const GiftCard = ({
  title,
  requestedByName,
  reservedBy,
  imageSrc,
  onButtonClick,
}: GiftCardProps) => {
  return (
    <div className="card flex-row w-full bg-base-200 shadow-sm">
      <figure className="p-4">
        <img
          src={imageSrc ?? "/gift-placeholder.svg"}
          alt={title}
          className="w-[100px] h-[100px] rounded-xl"
        />
      </figure>
      <div className={clsx("card-body p-4 pl-0 min-w-0 flex-1")}>
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
          className="card-actions mt-auto"
          onClick={(e) => e.preventDefault()}
        >
          <Button
            onClick={onButtonClick}
            variant={reservedBy === "me" ? "danger" : "primary"}
            disabled={reservedBy === "other"}
          >
            {reservedBy === "me" ? "Cancel" : "Reserve"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;

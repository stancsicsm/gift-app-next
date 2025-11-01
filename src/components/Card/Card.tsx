import clsx from "clsx";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";

type CardProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  onCardClick?: () => void;
  onButtonClick?: () => void;
};

export const Card = ({
  title,
  subtitle,
  imageSrc,
  onCardClick,
  onButtonClick,
}: CardProps) => {
  return (
    <div
      className="card flex-row w-full bg-base-200 shadow-sm"
      onClick={onCardClick}
    >
      <figure className="p-4">
        <img
          src={imageSrc ?? "/gift-placeholder.svg"}
          alt={title}
          className="w-[100px] h-[100px] rounded-xl"
        />
      </figure>
      <div className={clsx("card-body p-4 pl-0 min-w-0 flex-1")}>
        <div className="flex flex-col gap-0">
          <Label size="large" weight="semi-bold" noLineBreak>
            {title}
          </Label>
          {subtitle && (
            <Label size="medium" subtle noLineBreak>
              {subtitle}
            </Label>
          )}
        </div>
        <div className="card-actions mt-auto">
          <Button onClick={onButtonClick}>Reserve</Button>
        </div>
      </div>
    </div>
  );
};

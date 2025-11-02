import clsx from "clsx";
import Label from "@/components/Label/Label";

type AvatarProps = {
  name: string;
  imageSrc?: string;
  active?: boolean;
  onClick?: () => void;
};

const Avatar = ({ name, imageSrc, active, onClick }: AvatarProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1.5"
      onClick={onClick}
    >
      <div className={clsx("avatar", { "avatar-placeholder": !imageSrc })}>
        <div
          className={clsx("w-18 rounded-full", {
            "ring-primary ring-3 ring-offset-3": active,
            "bg-neutral": !imageSrc,
          })}
        >
          <ImageOrPlaceholder name={name} imageSrc={imageSrc} />
        </div>
      </div>
      <Label size="small" weight="semi-bold" subtle noLineBreak>
        {name}
      </Label>
    </div>
  );
};

export default Avatar;

const ImageOrPlaceholder = ({
  name,
  imageSrc,
}: Pick<AvatarProps, "name" | "imageSrc">) => {
  if (imageSrc) {
    return <img src={imageSrc} alt={name} />;
  }

  return (
    <div className="text-base-100">
      <span className="text-3xl">{name.charAt(0).toUpperCase()}</span>
    </div>
  );
};

import clsx from "clsx";
import Label from "@/components/Label/Label";

type AvatarProps = {
  name: string;
  imageSrc?: string;
  active?: boolean;
  onClick?: () => void;
  size?: "medium" | "large";
};

const Avatar = ({
  name,
  imageSrc,
  active,
  onClick,
  size = "medium",
}: AvatarProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center",
        size === "medium" ? "gap-1.5" : "gap-3",
      )}
      onClick={onClick}
    >
      <div className={clsx("avatar", { "avatar-placeholder": !imageSrc })}>
        <div
          className={clsx(
            "rounded-full shadow-sm",
            size === "medium" ? "w-18" : "w-28",
            {
              "ring-primary ring-3 ring-offset-3": active,
              "bg-secondary": !imageSrc,
            },
          )}
        >
          <ImageOrPlaceholder name={name} imageSrc={imageSrc} size={size} />
        </div>
      </div>
      <Label
        size={size === "medium" ? "small" : "large"}
        weight="semi-bold"
        subtle={size === "medium"}
        noLineBreak
      >
        {name}
      </Label>
    </div>
  );
};

export default Avatar;

const ImageOrPlaceholder = ({
  name,
  imageSrc,
  size = "medium",
}: Pick<AvatarProps, "name" | "imageSrc" | "size">) => {
  if (imageSrc) {
    return <img src={imageSrc} alt={name} />;
  }

  return (
    <div className="text-primary">
      <span className={clsx(size === "large" ? "text-5xl" : "text-3xl")}>
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

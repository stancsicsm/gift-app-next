import clsx from "clsx";
import type { ReactNode } from "react";
import Label from "@/components/Label/Label";
import type { PropsWithClassName } from "@/utils/type-utils";

type PageTitleProps = PropsWithClassName<{
  title: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}>;

const PageTitle = ({
  title,
  leftSlot,
  rightSlot,
  className,
}: PageTitleProps) => {
  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between w-full",
        className,
      )}
    >
      <div className="flex-1 flex justify-start">{leftSlot}</div>
      <Label size="x-large" weight="semi-bold">
        {title}
      </Label>
      <div className="flex-1 flex justify-end">{rightSlot}</div>
    </div>
  );
};

export default PageTitle;

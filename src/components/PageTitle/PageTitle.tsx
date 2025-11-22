"use client";

import clsx from "clsx";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import type { PropsWithClassName } from "@/utils/type-utils";

type PageTitleProps = PropsWithClassName<{
  title: string;
  backButton?: boolean;
  newGiftButton?: boolean;
}>;

const PageTitle = ({
  title,
  backButton = false,
  newGiftButton = false,
  className,
}: PageTitleProps) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-between w-full",
        className,
      )}
    >
      <div className="flex-1 flex justify-start">
        {backButton && (
          <Button variant="ghost" size="small" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
        )}
      </div>
      <Label size="x-large" weight="semi-bold">
        {title}
      </Label>
      <div className="flex-1 flex justify-end">
        {newGiftButton && (
          <Link href="/gifts/new">
            <Button variant="ghost" size="small">
              <Plus />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageTitle;

"use client";

import clsx from "clsx";
import { Gift } from "lucide-react";
import { useEffect, useState } from "react";
import Label from "@/components/Label/Label";

type AuthPageHeaderProps = {
  title: string;
};

const AuthPageHeader = ({ title }: AuthPageHeaderProps) => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleGiftClick = () => {
    setIsAnimationActive(true);
    setTimeout(() => setIsAnimationActive(false), 800); // Reset after animation duration
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: it should only run once on mount
  useEffect(() => {
    handleGiftClick();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={clsx(
          "w-fit mx-auto mt-4 p-3 bg-secondary rounded-full",
          isAnimationActive &&
            (Math.random() < 0.5 ? "animate-spin-once" : "animate-bounce-once"),
        )}
        onClick={handleGiftClick}
      >
        <Gift size="40" className="text-primary" />
      </div>
      <Label size="xx-large" weight="semi-bold" className="my-4 text-center">
        {title}
      </Label>
    </div>
  );
};

export default AuthPageHeader;

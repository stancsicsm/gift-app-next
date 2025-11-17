"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Label from "@/components/Label/Label";

export type NavigationItemProps = {
  href: string;
  name: string;
  icon: ReactNode;
};

const NavigationItem = ({ href, name, icon }: NavigationItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const textColor = clsx(
    isActive ? "text-primary" : "text-accent-content",
    "transition-colors duration-100",
  );

  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-1">
        <span className={clsx(textColor)}>{icon}</span>
        <Label size="x-small" weight="bold" subtle className={textColor}>
          {name}
        </Label>
      </div>
    </Link>
  );
};

export default NavigationItem;

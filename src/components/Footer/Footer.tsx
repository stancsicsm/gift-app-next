"use client";

import Image from "next/image";
import { useState } from "react";
import Label from "@/components/Label/Label";

const Footer = () => {
  const [showVersionInfo, setShowVersionInfo] = useState(false);
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME;

  const formatBuildTime = (isoString: string | undefined) => {
    if (!isoString) return undefined;
    const date = new Date(isoString);
    return date.toLocaleString("hu-HU", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <footer className="footer footer-center px-4 pt-12 pb-24">
      <aside>
        <Image
          src="/footer-logo.svg"
          alt="Footer Logo"
          width={64}
          height={36}
          className="w-16 h-auto"
        />
        <Label subtle>Pocok és Társa</Label>
        <Label
          subtle
          className="link"
          onClick={() => setShowVersionInfo((v) => !v)}
        >
          Version info
        </Label>
        {showVersionInfo && (
          <Label size="small" subtle>
            Build: {formatBuildTime(buildTime)}
          </Label>
        )}
      </aside>
    </footer>
  );
};

export default Footer;

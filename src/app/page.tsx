"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import { GiftCard } from "@/components/GiftCard/GiftCard";
import Label from "@/components/Label/Label";
import { mockGifts } from "@/mock-data/mockGifts";

const WishlistsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-6 gap-4">
      <WishlistsPageTitle />
      <WishlistsPageContent />
    </div>
  );
};

export default WishlistsPage;

const WishlistsPageTitle = () => {
  return (
    <Label size="x-large" weight="semi-bold" className="pb-4">
      Gift Wishes
    </Label>
  );
};

const WishlistsPageContent = () => {
  const [showFreeGiftsOnly, setShowFreeGiftsOnly] = useState(false);

  return (
    <div className="flex flex-col w-full gap-4">
      <GiftReservedFilter
        showFreeGiftsOnly={showFreeGiftsOnly}
        setShowFreeGiftsOnly={setShowFreeGiftsOnly}
      />
      {mockGifts
        .filter((gift) => (showFreeGiftsOnly ? !gift.reservedBy : true))
        .map((gift) => (
          <GiftCard
            key={gift.id}
            title={gift.title}
            requestedBy={gift.requestedBy}
            reservedBy={gift.reservedBy}
            imageSrc={gift.imageSrc}
          />
        ))}
    </div>
  );
};

type GiftReservedFilterProps = {
  showFreeGiftsOnly: boolean;
  setShowFreeGiftsOnly: (value: boolean) => void;
};

const GiftReservedFilter = ({
  showFreeGiftsOnly,
  setShowFreeGiftsOnly,
}: GiftReservedFilterProps) => {
  return (
    <div className="flex gap-2 w-full">
      <Button
        className="flex-1 shadow-sm"
        variant={showFreeGiftsOnly ? "light" : "primary"}
        onClick={() => setShowFreeGiftsOnly(false)}
      >
        All Gifts
      </Button>
      <Button
        className="flex-1 shadow-sm"
        variant={showFreeGiftsOnly ? "primary" : "light"}
        onClick={() => setShowFreeGiftsOnly(true)}
      >
        Free Gifts Only
      </Button>
    </div>
  );
};

"use client";

import { Gift } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftRequesterFilter from "@/components/GiftRequesterFilter/GiftRequesterFilter";
import GiftReservedFilter from "@/components/GiftReservedFilter/GiftReservedFilter";
import Label from "@/components/Label/Label";
import { mockGifts } from "@/mock-data/mockGifts";
import { mockUsers } from "@/mock-data/mockUsers";
import { getUserNameById } from "@/utils/get-user-name-by-id";

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
  const [selectedRequestedById, setSelectedRequestedById] = useState<
    number | null
  >(null);

  const giftsToDisplay = mockGifts
    .filter((gift) => (showFreeGiftsOnly ? !gift.reservedBy : true))
    .filter((gift) =>
      selectedRequestedById ? gift.requestedBy === selectedRequestedById : true,
    );

  return (
    <div className="flex flex-col w-full gap-4">
      <GiftRequesterFilter
        users={mockUsers}
        selectedRequestedById={selectedRequestedById}
        setSelectedRequestedById={setSelectedRequestedById}
      />
      <GiftReservedFilter
        showFreeGiftsOnly={showFreeGiftsOnly}
        setShowFreeGiftsOnly={setShowFreeGiftsOnly}
      />

      {giftsToDisplay.map((gift) => (
        <Link key={gift.id} href={`/gift/${gift.id}`}>
          <GiftCard
            title={gift.title}
            requestedByName={getUserNameById(mockUsers, gift.requestedBy)}
            reservedBy={gift.reservedBy}
            imageSrc={gift.imageSrc}
          />
        </Link>
      ))}
      {giftsToDisplay.length === 0 && <NoGiftsMessage />}
    </div>
  );
};

const NoGiftsMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 gap-2">
      <Gift
        size={64}
        // accent-content color
        color="#677389"
      />
      <Label size="x-large" subtle>
        No gifts
      </Label>
    </div>
  );
};

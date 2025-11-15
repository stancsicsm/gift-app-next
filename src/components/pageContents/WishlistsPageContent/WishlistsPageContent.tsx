"use client";

import Link from "next/link";
import { useState } from "react";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import GiftRequesterFilter from "@/components/GiftRequesterFilter/GiftRequesterFilter";
import GiftReservedFilter from "@/components/GiftReservedFilter/GiftReservedFilter";
import { mockUsers } from "@/mock-data/mockUsers";
import type { Gift } from "@/services/gifts/gift.types";
import { getUserNameById } from "@/utils/get-user-name-by-id";

type WishlistsPageContentProps = {
  gifts: Gift[];
};

const WishlistsPageContent = ({ gifts }: WishlistsPageContentProps) => {
  const [showFreeGiftsOnly, setShowFreeGiftsOnly] = useState(false);
  const [selectedRequestedById, setSelectedRequestedById] = useState<
    number | null
  >(null);

  const giftsToDisplay = gifts
    .filter((gift) => (showFreeGiftsOnly ? !gift.reservedBy : true))
    .filter((gift) =>
      selectedRequestedById ? gift.createdBy === selectedRequestedById : true,
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
        <Link key={gift.id} href={`/gifts/${gift.id}`}>
          <GiftCard
            title={gift.name}
            requestedByName={getUserNameById(mockUsers, gift.createdBy)}
            reservedBy={gift.reservedBy}
            imageSrc={undefined}
          />
        </Link>
      ))}
      {giftsToDisplay.length === 0 && <GiftMessage message="No gifts" />}
    </div>
  );
};

export default WishlistsPageContent;

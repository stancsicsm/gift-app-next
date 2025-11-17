"use client";

import Link from "next/link";
import { useState } from "react";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import GiftRequesterFilter from "@/components/GiftRequesterFilter/GiftRequesterFilter";
import GiftReservedFilter from "@/components/GiftReservedFilter/GiftReservedFilter";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import type { Gift } from "@/services/gifts/gift.types";
import type { User } from "@/services/users/user.types";
import { getUserNameById } from "@/utils/get-user-name-by-id";
import { handleGiftReservation } from "@/utils/handle-gift-reservation";

type WishlistsPageContentProps = {
  gifts: Gift[];
  users: User[];
};

const WishlistsPageContent = ({ gifts, users }: WishlistsPageContentProps) => {
  const [showFreeGiftsOnly, setShowFreeGiftsOnly] = useState(true);
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
      <StyledToaster />

      <GiftRequesterFilter
        users={users}
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
            requestedByName={getUserNameById(users, gift.createdBy)}
            reservedBy={gift.reservedBy}
            onButtonClick={() =>
              handleGiftReservation(gift.id, gift.reservedBy)
            }
          />
        </Link>
      ))}
      {giftsToDisplay.length === 0 && <GiftMessage message="No gifts" />}
    </div>
  );
};

export default WishlistsPageContent;

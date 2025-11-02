"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button/Button";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import GiftRequesterFilter from "@/components/GiftRequesterFilter/GiftRequesterFilter";
import GiftReservedFilter from "@/components/GiftReservedFilter/GiftReservedFilter";
import PageTitle from "@/components/PageTitle/PageTitle";
import { mockGifts } from "@/mock-data/mockGifts";
import { mockUsers } from "@/mock-data/mockUsers";
import { getUserNameById } from "@/utils/get-user-name-by-id";

const WishlistsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle
        title="Gift Wishes"
        rightSlot={
          <Link href="/gift/new">
            <Button variant="ghost">
              <Plus />
            </Button>
          </Link>
        }
        className="pb-4"
      />
      <WishlistsPageContent />
    </div>
  );
};

export default WishlistsPage;

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
      {giftsToDisplay.length === 0 && <GiftMessage message="No gifts" />}
    </div>
  );
};

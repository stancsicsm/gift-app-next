"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/Button/Button";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import type { Gift } from "@/services/gifts/gift.types";

type OwnGiftsPageProps = {
  gifts: Gift[];
};

const OwnGiftsPageContent = ({ gifts }: OwnGiftsPageProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const success = searchParams.get("success");
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (success === "true" && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.success("Gift added successfully!");
      router.replace("/gifts/own");
    }
  }, [success, router]);

  return (
    <div className="flex flex-col w-full gap-4">
      <StyledToaster />

      {gifts.map((gift) => (
        <Link key={gift.id} href={`/gifts/${gift.id}`}>
          {/*TODO: modify card to contain the edit button*/}
          <GiftCard
            title={gift.name}
            reservedBy={gift.reservedBy}
            buttonSlot={<OwnGiftButtons />}
          />
        </Link>
      ))}
      {gifts.length === 0 && (
        <GiftMessage message="No gifts to display. Add your first gift!" />
      )}
    </div>
  );
};

export default OwnGiftsPageContent;

const OwnGiftButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button variant="secondary">Edit</Button>
      <Button variant="danger-gradient">Delete</Button>
    </div>
  );
};

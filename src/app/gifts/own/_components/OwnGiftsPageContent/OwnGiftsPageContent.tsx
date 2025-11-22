"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import Button from "@/components/Button/Button";
import GiftCard from "@/components/GiftCard/GiftCard";
import GiftMessage from "@/components/GiftMessage/GiftMessage";
import StyledToaster from "@/components/StyledToaster/StyledToaster";
import { useConfirmation } from "@/hooks/useConfirmation";
import { deleteGiftAction } from "@/services/gifts/deleteGiftAction";
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

      <Link href="/gifts/new" className="ml-auto mb-4">
        <Button variant="primary">New Gift</Button>
      </Link>

      {gifts.map((gift) => (
        <Link key={gift.id} href={`/gifts/${gift.id}`}>
          <GiftCard
            title={gift.name}
            imageUrl={gift.imageUrl ?? undefined}
            reservedBy={gift.reservedBy}
            buttonSlot={<OwnGiftButtons giftId={gift.id} />}
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

const OwnGiftButtons = ({ giftId }: { giftId: number }) => {
  const router = useRouter();
  const { confirm, ConfirmationDialog } = useConfirmation();

  const deleteGift = async () => {
    const result = await deleteGiftAction(giftId);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.error);
    }
  };

  const handleDelete = () => {
    confirm({
      title: "Delete Gift",
      message: "Are you sure you want to delete this gift?",
      confirmText: "Delete",
      onConfirm: deleteGift,
    });
  };

  return (
    <>
      <ConfirmationDialog />

      <div className="flex flex-row gap-2">
        <Button
          variant="secondary"
          onClick={() => {
            router.push(`/gifts/${giftId}/edit`);
          }}
        >
          Edit
        </Button>
        <Button variant="danger-gradient" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </>
  );
};

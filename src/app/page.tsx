import { GiftCard } from "@/components/GiftCard/GiftCard";
import Label from "@/components/Label/Label";
import { mockGifts } from "@/mock-data/mockGifts";

const WishlistsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-6 gap-4">
      <Label size="x-large" weight="semi-bold">
        Gift Wishes
      </Label>
      <WishlistsPageContent />
    </div>
  );
};

export default WishlistsPage;

const WishlistsPageContent = () => {
  return (
    <div className="flex flex-col w-full pt-8 gap-4">
      {mockGifts.map((gift) => (
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

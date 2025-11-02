import Button from "@/components/Button/Button";

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

export default GiftReservedFilter;

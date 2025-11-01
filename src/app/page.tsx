import { GiftCard } from "@/components/GiftCard/GiftCard";
import Label from "@/components/Label/Label";

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
      <GiftCard
        title="New Laptop"
        requestedBy="Alice"
        imageSrc={"https://picsum.photos/200"}
        reservedBy="other"
      />
      <GiftCard title="Headphones" requestedBy="Charlie" reservedBy="me" />
      <GiftCard title="Smartwatch" requestedBy="Bob" reservedBy={null} />
      <GiftCard title="Backpack" requestedBy="Diana" reservedBy="other" />
      <GiftCard
        title="E-Reader"
        requestedBy="Ethan"
        imageSrc={"https://picsum.photos/201"}
        reservedBy="me"
      />
      <GiftCard
        title="Bluetooth Speaker"
        requestedBy="Fiona"
        reservedBy={null}
      />
      <GiftCard
        title="Travel Mug with long long long long long name"
        requestedBy="George"
        imageSrc={"https://picsum.photos/202"}
        reservedBy={null}
      />
    </div>
  );
};

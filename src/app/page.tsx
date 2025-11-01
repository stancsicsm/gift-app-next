import { Card } from "@/components/Card/Card";
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
      <Card
        title="New Laptop"
        subtitle="Reserved by Alice"
        imageSrc={"https://picsum.photos/200"}
      />
      <Card title="Headphones" subtitle="Reserved by Bob" />
      <Card title="Smartwatch" subtitle="Reserved by Charlie" />
      <Card title="Backpack" subtitle="Reserved by Diana" />
      <Card
        title="E-Reader"
        subtitle="Reserved by Ethan"
        imageSrc={"https://picsum.photos/201"}
      />
      <Card title="Bluetooth Speaker" subtitle="Reserved by Fiona" />
      <Card
        title="Travel Mug with long long long long long name"
        subtitle="Reserved by George"
        imageSrc={"https://picsum.photos/202"}
      />
    </div>
  );
};

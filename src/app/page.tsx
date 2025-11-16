import { Plus } from "lucide-react";
import Link from "next/link";
import WishlistsPageContent from "@/app/_components/WishlistsPageContent/WishlistsPageContent";
import Button from "@/components/Button/Button";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGifts } from "@/services/gifts/getGifts";
import { getUsers } from "@/services/users/getUsers";

const WishlistsPage = async () => {
  const gifts = await getGifts({ filter: "others" });
  const users = await getUsers();

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle
        title="Gift Wishes"
        rightSlot={
          <Link href="/gifts/new">
            <Button variant="ghost" size="small">
              <Plus />
            </Button>
          </Link>
        }
        className="pb-4"
      />
      <WishlistsPageContent gifts={gifts} users={users} />
    </div>
  );
};

export default WishlistsPage;

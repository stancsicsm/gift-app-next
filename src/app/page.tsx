import WishlistsPageContent from "@/app/_components/WishlistsPageContent/WishlistsPageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGifts } from "@/services/gifts/getGifts";
import { getCurrentUser } from "@/services/users/getCurrentUser";
import { getUsers } from "@/services/users/getUsers";

const WishlistsPage = async () => {
  const gifts = await getGifts({ filter: "others" });
  const currentUser = await getCurrentUser();
  const users = await getUsers();
  const usersWithoutCurrent = users.filter(
    (user) => user.id !== currentUser?.id,
  );

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle title="Gift Wishes" newGiftButton className="pb-4" />
      <WishlistsPageContent gifts={gifts} users={usersWithoutCurrent} />
    </div>
  );
};

export default WishlistsPage;

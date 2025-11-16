import ReservedGiftsPageContent from "@/app/gifts/reserved/_components/ReservedGiftsPageContent/ReservedGiftsPageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getGifts } from "@/services/gifts/getGifts";
import { getUsers } from "@/services/users/getUsers";

const ReservedGiftsPage = async () => {
  const gifts = await getGifts({ filter: "my_reservations" });
  const users = await getUsers();

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle title="My Reservations" className="pb-4" />
      <ReservedGiftsPageContent gifts={gifts} users={users} />
    </div>
  );
};

export default ReservedGiftsPage;

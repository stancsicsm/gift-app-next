import ProfilePageContent from "@/app/profile/_components/ProfilePageContent";
import PageTitle from "@/components/PageTitle/PageTitle";
import { getCurrentUser } from "@/services/users/getCurrentUser";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <PageTitle title="My Profile" className="pb-4" />
      <ProfilePageContent user={currentUser} />
    </div>
  );
};

export default ProfilePage;

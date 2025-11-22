import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { logoutAction } from "@/services/auth/logoutAction";
import type { User } from "@/services/users/user.types";

type ProfilePageContentProps = {
  user: User;
};

const ProfilePageContent = ({ user }: ProfilePageContentProps) => (
  <div className="flex flex-col items-center justify-center">
    <Avatar name={user.name} size="large" />
    <Label subtle>{user.email}</Label>
    <Button variant="danger" className="mt-12" onClick={logoutAction}>
      Logout
    </Button>
  </div>
);

export default ProfilePageContent;

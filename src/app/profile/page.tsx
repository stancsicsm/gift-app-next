import Button from "@/components/Button/Button";
import { logoutAction } from "@/services/auth/logoutAction";

const ProfilePage = () => {
  return (
    <form action={logoutAction}>
      <Button variant="danger" type="submit">
        Logout
      </Button>
    </form>
  );
};

export default ProfilePage;

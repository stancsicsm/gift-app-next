import Avatar from "@/components/Avatar/Avatar";
import type { User } from "@/services/users/user.types";

type GiftRequesterFilterProps = {
  users: User[];
  selectedRequestedById: number | null;
  setSelectedRequestedById: (value: number | null) => void;
};

const GiftRequesterFilter = ({
  users,
  selectedRequestedById,
  setSelectedRequestedById,
}: GiftRequesterFilterProps) => {
  const usersWithAll = [
    { id: null, name: "All", imageSrc: "/user-placeholder.svg" },
    ...users,
  ];

  return (
    <div className="flex flex-row gap-3 overflow-x-auto no-scrollbar p-1.5">
      {usersWithAll.map((user) => (
        <Avatar
          key={user.id ?? "all"}
          name={user.name}
          // TODO: add image when available
          imageSrc={undefined}
          active={user.id === selectedRequestedById}
          onClick={() => setSelectedRequestedById(user.id)}
        />
      ))}
    </div>
  );
};

export default GiftRequesterFilter;

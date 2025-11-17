import clsx from "clsx";
import { BadgeCheck, Gift, Home, UserCircle } from "lucide-react";
import NavigationItem, {
  type NavigationItemProps,
} from "@/components/NavigationItem/NavigationItem";

const navigationItems: NavigationItemProps[] = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Reserved", href: "/gifts/reserved", icon: <BadgeCheck /> },
  { name: "Own", href: "/gifts/own", icon: <Gift /> },
  { name: "Profile", href: "/profile", icon: <UserCircle /> },
];

const NavigationBar = () => {
  return (
    <div
      className={clsx(
        "flex fixed items-center p-2 px-6 gap-8",
        "bottom-2 left-1/2 transform -translate-x-1/2 z-50",
        "rounded-full bg-base-200 shadow-md border border-accent-content/10",
      )}
    >
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.href}
          href={item.href}
          name={item.name}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavigationBar;

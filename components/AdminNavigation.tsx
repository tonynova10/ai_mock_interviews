import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { getCurrentUser } from "@/lib/actions/auth.action";

const AdminNavigation = async () => {
  const user = await getCurrentUser();

  const historicalRoute = `/historical/${user?.capability}`;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Admin Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link href={historicalRoute}>Historical</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AdminNavigation;

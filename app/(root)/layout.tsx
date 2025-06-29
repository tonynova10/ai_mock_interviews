import AdminNavigation from "@/components/AdminNavigation";
import SignOutButton from "@/components/ui/SignOutButton";
import { getCurrentUser } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  const isUserAuthenticated = !!user;

  const isAdmin = user?.isAdmin;

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={38} height={32} />
            <h2 className="text-primary-100">PrepWise</h2>
          </Link>
          {isAdmin && <AdminNavigation />}
          <div className="ml-auto">
            <span className="mx-2">Hi, {user.name}</span>
            <span>
              <SignOutButton />
            </span>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;

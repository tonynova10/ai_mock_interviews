"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Sign out successfully.");
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    } finally {
      redirect("/sign-in");
    }
  };
  return (
    <Button className="btn-secondary" onClick={handleSignOut}>
      <p className="text-sm font-semibold text-primary-200 text-center">
        Sign out
      </p>
    </Button>
  );
};

export default SignOutButton;

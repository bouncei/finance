import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  label: string;
  href: string;
  isActive?: boolean;
}
const NavButton = ({ label, href, isActive }: NavButtonProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition ",
        isActive ? " bg-white/10 text-white" : " bg-transparent"
      )}
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavButton;

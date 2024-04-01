"use client";

import React from "react";
import Link from "next/link";
import { User } from "@/types/types";
import { createClient } from "@/utils/supabase/client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavMenuClient({
  user,
  userName,
}: {
  user: User;
  userName: string;
}) {
  const supabase = createClient();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.href = `/login`;
  };

  return (
    <div className="wrapper flex">
      <div className="mr-auto">
        <NavigationMenu className="mx-auto md:mx-0 my-1">
          <NavigationMenuList className="flex justify-between">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/collections" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Collections
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {user && (
              <NavigationMenuItem>
                <Link href={`/profile/${user.id}`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {user ? (
        <div className="flex items-center">
          <div className="mt-[2px] mr-[2px] hidden md:block">
            <p className="font-medium text-sm leading-5">{userName}</p>
          </div>

          <button
            className="mt-[0px] group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            type="button"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <Link
            href={`/login`}
            className="mt-[3px] group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          >
            <p>Log in</p>
          </Link>
        </div>
      )}
    </div>
  );
}

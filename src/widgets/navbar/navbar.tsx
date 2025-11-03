"use client";

import Image from "next/image";
import Link from "next/link";

import type { UserProfile } from "@/entities/user";
import { Button, LanguageSelector, ThemeToggle } from "@/shared/ui";

import { navbarLinks } from "./navbar.constants";

type NavbarProps = {
  user: UserProfile | null;
};

export const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav className="sticky top-0 border-b border-border/60 bg-background/80 backdrop-blur z-10">
      <div className="mx-auto flex h-16 w-full max-w-6xl justify-between px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground transition hover:text-primary"
          >
            Spotify Explorer
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navbarLinks.map(link => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-border/60" aria-hidden />

          <div className="flex items-center">
            {!user ? (
              <Button asChild size="sm" className="px-4">
                <Link href="/login">Login</Link>
              </Button>
            ) : (
              <Link
                href="/profile"
                className="group relative flex items-center"
              >
                <div className="h-9 w-9 overflow-hidden rounded-full border border-button bg-card" title={user.displayName}>
                  {user.imageUrl ? (
                    <Image
                      src={user.imageUrl}
                      alt={user.displayName}
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-muted-foreground">
                      {user.displayName.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </Link>
            )}
          </div>

          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const disabledNavbar = ["/login", "/register"];
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];
  if (disabledNavbar.includes(pathname)) {
    return null;
  }

  return (
    <header className="py-6 bg-slate-100">
      <div className="container flex flex-row items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">Hallmarck Store</h1>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Hallmarck Store</SheetTitle>
              <SheetDescription>Desc</SheetDescription>
            </SheetHeader>
            <div className="grid gap-2 py-6">
              {links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* menu items on wide screens */}
        <div className="hidden lg:flex flex-row gap-6">
          <div className="flex flex-row gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-200 hover:text-slate-900 focus:bg-slate-200 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  pathname === link.href
                    ? "bg-slate-200 text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/login"
            className="hidden lg:inline-block lg:group-hover:inline-block lg:group-focus:inline-block"
          >
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

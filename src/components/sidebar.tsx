"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sidebarElements = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
  ];

  return (
    <div className="relative flex">
      <aside className="flex h-screen w-56 flex-col items-center space-y-3 border-r py-3">
        {sidebarElements.map((element, index) => (
          <Button
            asChild
            key={index}
            className={`w-[85%] ${element.path === pathname && "bg-accent cursor-default"}`}
            variant="ghost"
          >
            <Link href={`${element.path}`}>{element.name}</Link>
          </Button>
        ))}
      </aside>
      <div className="w-full px-10">{children}</div>
    </div>
  );
}

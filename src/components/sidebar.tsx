"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icon from "@/components/common/icon";
import { usePathname } from "next/navigation";
import isValidIconName from "@/functions/isValidIconName";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [isMouseOver, setIsMouseOver] = useState(false);

  const sidebarElements = [
    { name: "Home", path: "/", icon: "home" },
    { name: "Users", path: "/users", icon: "users" },
  ];

  return (
    <div className="relative flex">
      <aside
        className={`flex h-screen flex-col items-center space-y-3 border-r py-3 ${isMouseOver ? "w-56" : "w-16"} duration-300`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {sidebarElements.map((element, index) => (
          <>
            {element.path === pathname ? (
              <Button
                className="w-[85%] cursor-default bg-accent"
                variant="ghost"
              >
                {isMouseOver ? (
                  <div className="flex justify-center space-x-3">
                    <Icon
                      name={
                        isValidIconName(element.icon) ? element.icon : "ban"
                      }
                      size={20}
                    />{" "}
                    <span>{element.name}</span>
                  </div>
                ) : (
                  <Icon
                    name={isValidIconName(element.icon) ? element.icon : "ban"}
                    size={20}
                  />
                )}
              </Button>
            ) : (
              <Button asChild key={index} className={`w-[85%]`} variant="ghost">
                {isMouseOver ? (
                  <Link
                    href={`${element.path}`}
                    className="flex justify-center space-x-3"
                  >
                    <Icon
                      name={
                        isValidIconName(element.icon) ? element.icon : "ban"
                      }
                      size={20}
                    />{" "}
                    <span>{element.name}</span>
                  </Link>
                ) : (
                  <Link href={`${element.path}`}>
                    {
                      <Icon
                        name={
                          isValidIconName(element.icon) ? element.icon : "ban"
                        }
                        size={20}
                      />
                    }
                  </Link>
                )}
              </Button>
            )}
          </>
        ))}
      </aside>
      <div className="w-full px-10">{children}</div>
    </div>
  );
}

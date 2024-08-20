"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeInContainer from "./framer";

const links = [
  {
    name: "home.",
    href: "/",
  },
  {
    name: "work.",
    href: "/work",
  },
  {
    name: "blog.",
    href: "/blog",
  },
];

const Navigation = () => {
  const pn = usePathname();
  return (
    <FadeInContainer className="pb-12">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <li
              className={cn(
                "font-normal tracking-tighter text-neutral-400 transition duration-300",
                pn === link.href && "text-neutral-200",
              )}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </FadeInContainer>
  );
};

export default Navigation;

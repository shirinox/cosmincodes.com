"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="mt-12 mb-14">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <li
              className={cn(
                "font-normal transition tracking-tighter duration-300 text-neutral-400",
                pn === link.href && "text-neutral-200"
              )}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

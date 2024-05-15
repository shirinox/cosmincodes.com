import Link from "next/link";
import Image from "next/image";
import type { PropsWithChildren, ReactNode } from "react";

const LinkIcon = ({
  children,
  href,
  icon,
}: PropsWithChildren & { href: string; icon?: ReactNode }) => {
  return (
    <Link
      className="p-0.5 px-1 inline-flex flex-row w-fit gap-1 items-center border-neutral-800 border text-sm text-neutral-50 bg-neutral-700 rounded"
      href={href}
    >
      {icon}
      {children}
    </Link>
  );
};

export default LinkIcon;

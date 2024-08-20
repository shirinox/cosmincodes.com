"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { BriefcaseBusiness, DoorClosed, Newspaper } from "lucide-react";

import { useRouter } from "next/navigation";

export function CommandMenu() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading={"Quicklinks"}>
          <CommandItem
            onSelect={() => {
              router.push("/");
              setOpen(false);
            }}
            className="space-x-1.5"
          >
            <DoorClosed />
            <p>Go to Home</p>
          </CommandItem>

          <CommandItem
            onSelect={() => {
              router.push("/work");
              setOpen(false);
            }}
            className="space-x-1.5"
          >
            <BriefcaseBusiness />
            <p>Go to Work</p>
          </CommandItem>

          <CommandItem
            onSelect={() => {
              router.push("/blog");
              setOpen(false);
            }}
            className="space-x-1.5"
          >
            <Newspaper />
            <p>Go to Blogs</p>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Blogs"></CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

import Link from "next/link";
import { Button } from "./components/button";
import { faGolang } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ImageGrid } from "./components/home/images";
import type { Metadata } from "next";

const LINK_CLASS =
  "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-neutral-50 underline decoration-transparent underline-offset-2 transition transition-colors hover:cursor-pointer hover:decoration-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const metadata: Metadata = {
  title: "Tatu Cosmin",
};

export default function Home() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-2xl tracking-tight text-neutral-50">
          hey there, this is cosmin 👋🏻
        </h1>
      </div>

      <p className="font-light text-neutral-300">
        I&apos;m a software engineer, perfectionist, and travel enthusiast. I
        currently{" "}
        <Link className={LINK_CLASS} href={"/work"}>
          work
        </Link>{" "}
        as a{" "}
        <Link className={LINK_CLASS} href="https://concentrix.com">
          System Software Engineer @ Concentrix
        </Link>{" "}
        while{" "}
        <Button
          className="inline-flex items-center gap-1 border border-cyan-300 bg-cyan-900 text-neutral-50 hover:border-cyan-100"
          variant={"backgroundicon"}
          size={"backgroundicon"}
        >
          learning
          <FontAwesomeIcon
            className="h-5 w-5 shrink-0 text-white"
            icon={faGolang}
          />
        </Button>{" "}
        in my free time. Also, here are some key moments from my travels:
      </p>
      <ImageGrid />
      <p className="font-light text-neutral-300">
        I really enjoy{" "}
        <Link
          className={LINK_CLASS}
          href="https://www.tiktok.com/@codewithcosmin"
        >
          making development content
        </Link>
        , localized to my country as I consider sharing your knowledge back to
        others is important. I mostly specialize in building Next.js
        applications as this is what I&apos;ve been using in the past 2 years.
      </p>
    </main>
  );
}

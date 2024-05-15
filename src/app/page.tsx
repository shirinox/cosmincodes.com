import Link from "next/link";
import LinkIcon from "./components/link-icon";
import { faCoffee, faB } from "@fortawesome/free-solid-svg-icons";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main>
      <h1 className="text-neutral-50 font-semibold text-2xl mb-12">
        hi, I&apos;m cosmin 👋
      </h1>
      <p className="font-normal text-base">
        I&apos;m a fullstack developer, perfectionist, and travel enthusiast. I
        use <LinkIcon href="https://upwork.com">Nextjs</LinkIcon> for most of my
        projects. I currently{" "}
        <LinkIcon
          icon={<FontAwesomeIcon icon={faUpwork} />}
          href="https://upwork.com"
        >
          freelance
        </LinkIcon>{" "}
        most of my work, always trying to improve and be the best version of
        myself.
      </p>
    </main>
  );
}

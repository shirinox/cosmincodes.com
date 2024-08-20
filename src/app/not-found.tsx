import Link from "next/link";
import { Button } from "./components/button";
import FadeInContainer from "./components/framer";

const NotFound = () => {
  return (
    <FadeInContainer className="my-20 text-center">
      <h1 className="text-7xl font-black">404</h1>
      <h2 className="text-3xl font-semibold">
        Hey, you&apos;re not supposed to be here.
      </h2>
      <p className="mt-4 font-light">
        No, but for real, I don&apos;t know how you ended up here...
      </p>
      <Link href={"/"}>
        <Button className="mt-4" variant={"ghost"}>
          Go to Home
        </Button>
      </Link>
    </FadeInContainer>
  );
};
export default NotFound;

import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={46} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <Link
          href="https://github.com/lornaegele/ai-learn-plattform"
          target="_blank"
        >
          <Image src="/icons/github.svg" alt="github" width={28} height={28} />
        </Link>
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

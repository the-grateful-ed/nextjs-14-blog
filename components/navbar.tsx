import Link from "next/link";

import { ModeToggle } from "./theme-switch";

export default function Navbar() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg- py-2 text-neutral-500 shadow-lg hover:text-primary/70 focus:text-primary lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2">
          <Link className="font-medium text-primary flex flex-row text-2xl underline underline-offset-8  hover:decoration-gray-50" href="#">
            <div className="font-extrabold">ed</div>
            <span className=" text-primary/80 font-extrabold">nda</span>
            <span className="  text-primary/60 font-extrabold">computer</span>
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

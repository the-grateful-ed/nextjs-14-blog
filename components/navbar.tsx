import Link from "next/link";

import { ModeToggle } from "./theme-switch";

export default function Navbar() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg- py-2 text-neutral-500 shadow-lg hover:text-primary/70 focus:text-primary lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2">
          <Link className="text-xl font-semibold text-primary" href="#">
            Navbar
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}

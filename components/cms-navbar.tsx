
import { Undo2Icon } from "lucide-react"
import Link from "next/link"

const CMSNavbar = () => {
  return (
<nav
  className="relative flex w-full flex-wrap items-center justify-between bg-background py-2 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <Undo2Icon className="stroke-primary stroke-4" />
    <div className="ml-2">
    <Link className="font-medium text-primary/75 flex flex-row text-2xl underline underline-offset-8 hover:decoration-gray-50" href="#">
        <div className="font-extrabold">ed</div>
        <span className=" text-primary/80 font-extrabold">nda</span>
        <span className="  text-foreground font-thin">computer</span>
    </Link>
    </div>
  </div>
</nav>
  )
}

export default CMSNavbar
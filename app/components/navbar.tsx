import Link from 'next/link'

export const navbar = () => {
  return (
    <nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div className="ml-2">
      <Link
        className="text-xl font-semibold text-neutral-800 dark:text-neutral-200"
        href="#"
        >Navbar</Link>
    </div>
  </div>
</nav>
  )
}

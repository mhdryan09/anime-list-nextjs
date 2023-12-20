import Link from "next/link"

const Header = ({ title, LinkHref, LinkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link href={LinkHref} className="text-sm underline transition-all md:text-xl hover:text-indigo-500">
        {LinkTitle}
      </Link>
    </div>
  )
}

export default Header
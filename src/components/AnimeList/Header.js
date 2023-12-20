import Link from "next/link"

const Header = ({ title, LinkHref, LinkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
      {
        LinkHref && LinkTitle ?
          <Link href={LinkHref} className="text-sm underline transition-all md:text-xl hover:text-accent text-primary">
            {LinkTitle}
          </Link>
          : null
      }

    </div>
  )
}

export default Header
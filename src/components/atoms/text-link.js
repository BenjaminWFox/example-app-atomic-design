import Link from 'next/link'

export default function TextLink({href, children}) {
  return <div className="underline"><Link href={href}>{children}</Link></div>
}
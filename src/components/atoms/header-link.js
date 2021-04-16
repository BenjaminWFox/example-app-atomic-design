import Link from 'next/link'

export default function HeaderLink({href, children}) {
  return <div><Link href={href}>{children}</Link></div>
}
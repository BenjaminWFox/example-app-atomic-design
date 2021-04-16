import Link from 'next/link'

export default function TextLink({href, children}) {
  return <div><Link href={href}>{children}</Link></div>
}
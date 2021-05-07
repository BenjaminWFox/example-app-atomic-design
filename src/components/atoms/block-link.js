import Link from 'next/link'

export default function BlockLink({href, children}) {
  return <div className="underline atom"><Link href={href}>{children}</Link></div>
}
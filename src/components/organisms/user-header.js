import React from 'react'
import Icon from '../atoms/icon'
import UserAvatar from '../atoms/user-avatar'
import Logo from '../molecules/logo'
import Link from 'next/link'
import HeaderLinkList from '../molecules/header-link-list'
import HeaderIconsGroup from '../molecules/header-icons-group'
import TextLink from '../atoms/text-link'

export default React.memo(function UserHeader() {
  return (<>
    <div className="horizontal">
      <Logo />
      <HeaderLinkList>
        <TextLink href="/category/Personal">Details</TextLink>
        <TextLink href="/all">Lists</TextLink>
      </HeaderLinkList>
    </div>
    <HeaderIconsGroup>
      <Link href="/settings"><a><Icon src="/icons/settings.svg" name="Settings" size="sm" /></a></Link>
      <UserAvatar size="sm" />
    </HeaderIconsGroup>
  </>)
})
import React from 'react'
import Icon from '../atoms/icon'
import UserAvatar from '../atoms/user-avatar'
import Logo from '../molecules/logo'
import Link from 'next/link'
import HeaderLinkList from '../molecules/header-link-list'
import HeaderIconsGroup from '../molecules/header-icons-group'
import BlockLink from '../atoms/block-link'

export default React.memo(function UserHeader() {
  return (<div className="organism" style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
    <div className="horizontal">
      <Logo />
      <HeaderLinkList>
        <BlockLink href="/category/Personal">Categories</BlockLink>
        <BlockLink href="/all">Lists</BlockLink>
      </HeaderLinkList>
    </div>
    <HeaderIconsGroup>
      <Link href="/settings"><a><Icon src="/icons/settings.svg" name="Settings" size="sm" /></a></Link>
      <UserAvatar size="sm" />
    </HeaderIconsGroup>
  </div>)
})
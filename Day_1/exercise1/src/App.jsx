import { useState } from 'react'
import './App.css'

import ProfileHeader from './assets/components/ProfileHeader.jsx'
import Avatar from './assets/components/Avatar.jsx'
import UserInfo from './assets/components/UserInfo.jsx'
import StatsSection from './assets/components/StatsSection.jsx'
import Bio from './assets/components/Bio.jsx'
import FollowButton from './assets/components/FollowButton.jsx'

function App() {
  return (
    <>
      <ProfileHeader />
      <Avatar />
      <UserInfo />
      <StatsSection />
      <Bio />
      <FollowButton />
    </>
  )
}

export default App

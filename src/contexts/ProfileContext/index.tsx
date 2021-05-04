import React, { createContext, ReactNode, useState } from 'react'

export interface DataProps {
  name: string | null
  email: string | null
  location: string | null
  company: string | null
  bio: string | null
  avatar_url: string
  followers_url: string
  following_url: string
  organizations_url: string
  starred_url: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

interface ProfileContextData {
  data: {},
  setData: React.Dispatch<React.SetStateAction<{}>>
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

function ProfileProvider({ children }: ProfileProviderProps) {

  const [data, setData] = useState({})

  return (
    <ProfileContext.Provider
      value={{
        data, setData
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider

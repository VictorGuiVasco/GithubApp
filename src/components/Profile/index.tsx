import React, { useContext } from 'react'
import { DataProps, ProfileContext } from '../../contexts/ProfileContext'

import {
  Container,
  FollowersContainer,
  FollowersNumber,
  FollowersWrapper,
  Image,
  Text,
  TextTitle,
  Title,
  TitleContainer,
  YellowBord
} from './styles'

const Profile: React.FC = () => {
  const { data } = useContext(ProfileContext)

  return (
    <>
      <Image source={{ uri: data.avatar_url }} />

      <Container>
        <TitleContainer>
          <YellowBord />
          <Title>{data.login}</Title>
        </TitleContainer>
        {data.email && <TextTitle>{data.email}</TextTitle>}
        {data.location && <TextTitle>{data.location}</TextTitle>}
      </Container>

      <FollowersContainer>
        <FollowersWrapper>
          <FollowersNumber>{data.followers}</FollowersNumber>
          <Text>Seguidores</Text>
        </FollowersWrapper>
        <FollowersWrapper>
          <FollowersNumber>{data.following}</FollowersNumber>
          <Text>Seguindo</Text>
        </FollowersWrapper>
        <FollowersWrapper>
          <FollowersNumber>{data.public_repos}</FollowersNumber>
          <Text>Repos</Text>
        </FollowersWrapper>
      </FollowersContainer>

      { data.bio && (
        <Container>
          <TitleContainer>
            <YellowBord />
            <Title>Bio</Title>
          </TitleContainer>
          <TextTitle>{data.bio}</TextTitle>
        </Container>
      )}
    </>
  )
}

export default Profile

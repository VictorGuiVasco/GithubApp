import React, { useState } from 'react';

import { Container, ItemContainer, ItemTitle, ItemTitleContainer, Text, TextStar, Wrapper, YellowBord } from './styles'

import { Ionicons } from '@expo/vector-icons'

export interface RepositoriesData {
  id: number
  name: string
  description?: string
  stargazers_count: number
}

interface RepositoriesItemProps {
  repositories: RepositoriesData
}

const RepositoriesItem: React.FC<RepositoriesItemProps> = ({ repositories }) => {

  return (
    <ItemContainer>
      <ItemTitleContainer>
        <YellowBord />
        <ItemTitle>{repositories.name}</ItemTitle>
      </ItemTitleContainer>
      {repositories.description && <Text>{repositories.description}</Text>}

      <Wrapper>
        <Container>
          <Ionicons name='ios-star-outline' size={24} color='#FFCE00' />
          <TextStar>{repositories.stargazers_count}</TextStar>
        </Container>

        <Container>
          <Ionicons name='ios-lock-closed-outline' size={24} color='#63BF1F' style={{ marginRight: 13 }} />
          <Ionicons name='ios-lock-open-outline' size={24} color='#CC042A' />
        </Container>
      </Wrapper>
    </ItemContainer>
  )
}

export default RepositoriesItem

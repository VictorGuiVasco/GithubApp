import styled from 'styled-components/native'

export const Image = styled.Image`
  border-width: 3px;
  border-color: #FFF;
  border-radius: 100px;

  margin-top: -55px;

  height: 115px;
  width: 115px;

  align-self: center;

  background-color: goldenrod;
`

export const Container = styled.View`
  margin-top: 40px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
`

export const YellowBord = styled.View`
  height: 42px;
  width: 10px;
  margin-right: 14px;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #FFCE00;
`

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #FFFFFF;
`

export const TextTitle = styled.Text`
  font-size: 18px;
  margin-left: 24px;
  color: #CCC;
`

export const Text = styled.Text`
  font-size: 18px;
  color: #CCC;
`

export const FollowersContainer = styled.View`
  margin-top: 40px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #5252525D;
`

export const FollowersWrapper = styled.View`
  padding: 15px 0;
  align-items: center;
`

export const FollowersNumber = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #FFFFFF;
`

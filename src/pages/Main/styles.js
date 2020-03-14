import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #E9FFED;
`;

export const Header = styled.View`
   margin-top: 30px;
   justify-content: flex-start;
   margin-left: 30px;
`
export const HeaderText = styled.Text`
   font-weight: bold;
   font-size: 30px;
`
export const ContainerHeader = styled.View`

`

export const MenuHeader = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    margin-left: 30px;
    align-items: center;

`

export const MenuHeaderText = styled.Text`
    color: #000;
    margin-left: 15px;
    font-weight: bold;
    margin-right: 20px;
    font-size: 20px;
    text-align: center;
    /* border-bottom-color: #ddd; */
    
`

export const Cards = styled.View`
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.View`
  width: 300px; 
  height: 100px;
  border: 4px solid;
  border-radius: 4px;
  border-color: #62BE92;
  background-color: #62BE92;
  align-items: center;
  justify-content: center;
`


export const TextCard = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 25px;
  text-align: center;

`

export const CardDescription = styled.Text`
  margin-top: 2px;
  color: #dedede;
`

export const Divisor = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
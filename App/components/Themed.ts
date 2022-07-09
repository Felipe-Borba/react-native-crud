import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({theme}) => theme.font.regular};
`;

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-items: center;

  background-color: ${({theme}) => theme.color.BACKGROUND_300}
`;

import styled from "styled-components/native";


export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-items: center;

  background-color: ${({ theme }) => theme.color.BACKGROUND_300}
`;

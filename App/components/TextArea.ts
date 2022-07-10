import styled from "styled-components/native";

export const TextArea = styled.TextInput`
  height: 90px;
  width: 100%;
  margin-bottom: 12px;
  padding: 5px;

  border: 1px;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${({theme}) => theme.color.BACKGROUND_200};
`;

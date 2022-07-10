import { GestureResponderEvent, Pressable } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

export function Button({ onPress, text }: ButtonProps) {
  return (
    <Btn onPress={onPress}>
      <Text>{text}</Text>
    </Btn>
  );
}

const Btn = styled.TouchableOpacity`
  padding: 9px 25px;
  width: 100%;
  align-items: center;

  background-color: ${({theme}) => theme.color.PRIMARY};
  border: 1px solid;
  border-color: ${({theme}) => theme.color.BORDER_500};
  border-radius: 9px;
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 19px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.BACKGROUND_200};
`;
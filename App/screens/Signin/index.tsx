import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { View } from "../../components/View";

export default function Sigin() {
  const navigation = useNavigation();

  return (
    <View>
      <ContainerLogo>
        <TextTitle>Bem Vindo!</TextTitle>
      </ContainerLogo>
      <ContainerForm>
        <Text> Faça o seu login ou cadastre-se</Text>

        <InputText>Usuário</InputText>
        <TextInput placeholder="Seu usuário..." />

        <InputText>Senha</InputText>
        <TextInput placeholder="Sua senha..." secureTextEntry />

        <ContainerButton>
          <Button
            text="Nova Conta"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
          <Button text="Entrar" onPress={() => {}} />
        </ContainerButton>
      </ContainerForm>
    </View>
  );
}

const TextTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 17px;
`;

const ContainerForm = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding: 5%;

  background-color: ${({ theme }) => theme.color.BACKGROUND_200};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const InputText = styled.Text`
  width: 100%;
  margin-top: 20px;

  font-size: 20px;
  font-family: ${({ theme }) => theme.font.regular};
  font-weight: bold;
`;

const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  margin-bottom: 12px;

  border-bottom-width: 1px;
  font-size: 16px;
`;

const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

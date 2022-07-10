import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { TextInput } from "../../components/TextInput";
import { View } from "../../components/View";
import { authApi } from "../../hooks/apiFetch";
import { authActions } from "../../store/ducks/auth";

export default function Sigin() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit() {
    const response = await authApi.signIn({ username, password });

    if (response.status <= 201) {
      const data = response.data as authApi.AuthResponse
      dispatch(authActions.logIn({ ...data, isLoggedIn:true }));
      navigation.navigate("Root")
    }
  }

  return (
    <View>
      <ContainerLogo>
        <TextTitle>Bem Vindo!</TextTitle>
      </ContainerLogo>
      <ContainerForm>
        <Text>Faça o seu login</Text>

        <InputText>Usuário</InputText>
        <TextInput
          placeholder="Seu usuário..."
          value={username}
          onChangeText={setUsername}
        />

        <InputText>Senha</InputText>
        <TextInput
          placeholder="Sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button text="Acessar" onPress={handleSubmit} />

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <HelpText>Não possui uma conta? Cadastre-se</HelpText>
        </TouchableOpacity>
      </ContainerForm>
    </View>
  );
}

const Text = styled.Text`
  margin-top: 25px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: 18px;
`;

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

const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HelpText = styled.Text`
  margin-top: 10px;
`;

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { TextInput } from "../../components/TextInput";
import { View } from "../../components/View";
import { authApi } from "../../hooks/authApi";
import { authActions } from "../../store/ducks/auth";

export function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit() {
    const response = await authApi.signUp({ username, password, email });
    if(response) {
      dispatch(authActions.logIn({ ...response, isLoggedIn: true }));
      navigation.navigate("Root");
    }
  }

  return (
    <View>
      <ContainerLogo>
        <TextTitle>Novo usuário</TextTitle>
      </ContainerLogo>
      <ContainerForm>
        <InputText>Usuário</InputText>
        <TextInput
          placeholder="Seu usuário..."
          value={username}
          onChangeText={setUsername}
        />

        <InputText>Email</InputText>
        <TextInput
          placeholder="Seu e-mail..."
          value={email}
          onChangeText={setEmail}
        />

        <InputText>Senha</InputText>
        <TextInput
          placeholder="Sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button text="Acessar" onPress={handleSubmit} />
      </ContainerForm>
    </View>
  );
}

const TextTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ContainerForm = styled.View`
  flex: 4;
  align-items: center;
  justify-content: center;
  padding: 5%;

  background-color: ${({ theme }) => theme.color.BACKGROUND_200};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

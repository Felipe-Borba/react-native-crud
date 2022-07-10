import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { KeyboardAvoidingView } from "../../components/KeyboardAvoidView";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { articleApi } from "../../hooks/articleApi";
import { ArticleStackParamsList, ArticleStackScreenProps } from "../../navigation/articleNavigator";
import { ArticleActions } from "../../store/ducks/article";

export default function CreateArticle() {
  const navigation = useNavigation<ArticleStackScreenProps<"NewArticle">>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit() {
    const response = await articleApi.create({ body, description, title });
    if(response) {
      dispatch(ArticleActions.addArticle(response))
      navigation.navigate("ListArticles")
    }
  }

  return (
    <View>
      <KeyboardAvoidingView>
        <InputText>Título</InputText>
        <TextInput
          placeholder="Titulo do artigo"
          value={title}
          onChangeText={setTitle}
        />

        <InputText>Descrição</InputText>
        <TextInput
          placeholder="Digite uma descrição"
          value={description}
          onChangeText={setDescription}
        />

        <InputText>Conteúdo</InputText>
        <TextArea
          placeholder="Conteúdo do artigo"
          multiline={true}
          numberOfLines={5}
          value={body}
          onChangeText={setBody}
        />

        <Button text="Enviar" onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
}

const View = styled.View`
  flex: 1;
  padding: 5%;

  background-color: ${({ theme }) => theme.color.SECONDARY};
`;

const TextArea = styled.TextInput`
  height: 90px;
  width: 100%;
  margin-bottom: 12px;
  padding: 5px;

  border: 1px;
  border-radius: 5px;
  font-size: 16px;
`;

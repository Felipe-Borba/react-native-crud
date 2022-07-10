import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { KeyboardAvoidingView } from "../../components/KeyboardAvoidView";
import { TextInput } from "../../components/TextInput";
import { View } from "../../components/View";
import { articleApi } from "../../hooks/articleApi";
import { ArticleStackScreenProps } from "../../navigation/articleNavigator";
import { articleActions } from "../../store/ducks/article";
import { TextArea } from "../../components/TextArea";

export default function CreateArticle() {
  const navigation = useNavigation<ArticleStackScreenProps<"NewArticle">>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit() {
    const response = await articleApi.create({ body, description, title });
    if(response) {
      dispatch(articleActions.addArticle(response))
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

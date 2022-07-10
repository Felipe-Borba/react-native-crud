import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { KeyboardAvoidingView } from "../../components/KeyboardAvoidView";
import { TextArea } from "../../components/TextArea";
import { TextInput } from "../../components/TextInput";
import { View } from "../../components/View";
import { articleApi } from "../../hooks/articleApi";
import { ArticleStackScreenProps } from "../../navigation/ArticleNavigator";
import { RootState } from "../../store";
import { ArticleActions } from "../../store/ducks/article";

export default function ViewArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigation = useNavigation<ArticleStackScreenProps<"ViewArticle">>();
  const articleState = useSelector((state: RootState) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    const selected = articleState.list.find(
      (article) => article.id === articleState.selected
    );
    setTitle(selected?.title || "");
    setDescription(selected?.description || "");
    setBody(selected?.body || "");
  }, []);

  async function handleSubmit() {
    await articleApi.update(articleState.selected, {
      body,
      description,
      title,
    });
    dispatch(ArticleActions.fetchAllArticles() as any);
    navigation.navigate("ListArticles");
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

        <Button text="Atualizar" onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
}

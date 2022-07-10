import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Text } from "../../components/Text";
import { View } from "../../components/View";
import { Article, ArticleActions } from "../../store/ducks/article";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{article.title}</Text>
      <Image
        source={{ uri: article.thumbnail }}
        style={{ width: 100, height: 100 }}
      />

      <Touchable onPress={() => {}}>
        <Ionicons name="search-circle-sharp" size={30} color="black" />
      </Touchable>

      <Touchable
        onPress={() => {
          dispatch(ArticleActions.removeArticle(article.id));
          //TODO call delete route
        }}
      >
        <Ionicons name="trash-bin" size={30} color="black" />
      </Touchable>
    </View>
  );
}

const Touchable = styled.TouchableOpacity``;

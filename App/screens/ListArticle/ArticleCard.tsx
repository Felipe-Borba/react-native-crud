import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { Text } from "../../components/Text";
import { View } from "../../components/View";
import { articleApi } from "../../hooks/articleApi";
import { ArticleStackParamsList, ArticleStackScreenProps } from "../../navigation/ArticleNavigator";
import { RootTabScreenProps } from "../../navigation/types";
import { Article, ArticleActions } from "../../store/ducks/article";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
    const navigation = useNavigation<ArticleStackScreenProps<"ListArticles">>();
  const dispatch = useDispatch();

  return (
    <View>
      <Touchable
        onPress={() => {
          navigation.navigate("ViewArticle")
        }}
      >
        <Text>{article.title}</Text>
        <Image
          source={{ uri: article.thumbnail }}
          style={{ width: 100, height: 100 }}
        />
      </Touchable>

      <Touchable
        onPress={() => {
          dispatch(ArticleActions.removeArticle(article.id));
          articleApi.remove(article.id);
        }}
      >
        <Ionicons name="trash-bin" size={30} color="black" />
      </Touchable>
    </View>
  );
}

const Touchable = styled.TouchableOpacity``;

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { articleApi } from "../../hooks/articleApi";
import { ArticleStackScreenProps } from "../../navigation/ArticleNavigator";
import { Article, articleActions } from "../../store/ducks/article";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const navigation = useNavigation<ArticleStackScreenProps<"ListArticles">>();
  const dispatch = useDispatch();

  return (
    <Container>
      <Icon
        onPress={() => {
          dispatch(articleActions.removeArticle(article.id));
          articleApi.remove(article.id);
        }}
      >
        <Ionicons name="trash-bin" size={25} color="black" />
      </Icon>

      <Content
        onPress={() => {
          dispatch(articleActions.selectArticle(article.id));
          navigation.navigate("ViewArticle");
        }}
      >
        <Title>{article.title}</Title>
        <Image source={{ uri: article.thumbnail }} />
      </Content>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  padding: 3% 3% 0 3%;
  align-items: center;
  margin-bottom: 5%;

  background-color: ${({ theme }) => theme.color.BACKGROUND_200};
  border-radius: 15px;
`;

const Content = styled.TouchableOpacity`
  width: 80%;
  align-items: center;

`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

const Image = styled.Image`
  width: 386px;
  height: 210px;

  border-radius: 15px;
  border-color: ${({ theme }) => theme.color.BACKGROUND_400};
  border-width: 3px;
`;

const Icon = styled.TouchableOpacity`
  position: absolute;
  top: 5%;
  right: 5%;
`;

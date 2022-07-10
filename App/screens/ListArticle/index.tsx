import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../../store";
import { ArticleActions } from "../../store/ducks/article";
import ArticleCard from "./ArticleCard";

export default function ListArticle() {
  const articleList = useSelector((state: RootState) => state.article.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ArticleActions.fetchAllArticles() as any);
  }, []);

  return (
    <ScrollView>
      {articleList.map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
    </ScrollView>
  );
}

const ScrollView = styled.ScrollView`
  padding: 3% 3% 0% 3%;
  flex: 1;

  background-color: ${({ theme }) => theme.color.SECONDARY};
`;

import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../../components/View";
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
    <View>
      <ScrollView>
        {articleList.map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </ScrollView>
    </View>
  );
}

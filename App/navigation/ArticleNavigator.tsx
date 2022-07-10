import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateArticle from "../screens/CreateArticle";
import ListArticle from "../screens/ListArticle";

export type ArticleStackParamsList = {
  ListArticles: undefined;
  NewArticle: undefined;
  ViewArticle: undefined;
};

const ArticleStack = createNativeStackNavigator<ArticleStackParamsList>();

export function ArticleNavigator() {
  return (
    <ArticleStack.Navigator>
      <ArticleStack.Screen
        name="ListArticles"
        component={ListArticle}
        options={{
          title: "Artigos",
        }}
      />

      <ArticleStack.Screen
        name="NewArticle"
        component={CreateArticle}
        options={{
          title: "Novo Artigo",
        }}
      />
    </ArticleStack.Navigator>
  );
}
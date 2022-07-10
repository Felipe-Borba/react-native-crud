import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import CreateArticle from "../screens/CreateArticle";
import ListArticle from "../screens/ListArticle";
import { RootTabScreenProps } from "./types";

export type ArticleStackParamsList = {
  ListArticles: undefined;
  NewArticle: undefined;
  ViewArticle: undefined;
};
export type ArticleStackScreenProps<Screen extends keyof ArticleStackParamsList> =
  NativeStackNavigationProp<ArticleStackParamsList, Screen>;

const ArticleStack = createNativeStackNavigator<ArticleStackParamsList>();

export function ArticleNavigator() {
  return (
    <ArticleStack.Navigator>
      <ArticleStack.Screen
        name="ListArticles"
        component={ListArticle}
        options={({ navigation }: RootTabScreenProps<"Articles">) => ({
          title: "Artigos",
          tabBarIcon: () => (
            <MaterialIcons name="article" size={30} color="black" />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewArticle")}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={"#000"}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
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
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArticleStackParamsList } from "./ArticleNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Signin: undefined;
  Signup: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootTabParamList = {
  Articles: NavigatorScreenParams<ArticleStackParamsList> | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    CompositeScreenProps<
      BottomTabScreenProps<RootTabParamList, Screen>,
      NativeStackScreenProps<ArticleStackParamsList, Screen>
    >
  >;

import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import Sigin from "../screens/Signin";
import { SignUp } from "../screens/Signup";
import { ArticleNavigator } from "./ArticleNavigator";
import {
  RootStackParamList,
  RootTabParamList
} from "./types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Sigin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Articles"
        component={ArticleNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Artigos",
          tabBarIcon: () => (
            <MaterialIcons name="article" size={30} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

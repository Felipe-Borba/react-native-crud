import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";

import { Text } from "../components/Text";
import { View } from "../components/View";
import { ArticleStackParamsList } from "../navigation/articleNavigator";
import { RootState } from "../store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/ducks/counter";

export default function TabOneScreen() {
  const [counterNumber, setCounterNumber] = useState("");
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigation<NativeStackNavigationProp<ArticleStackParamsList>>();

  function handleIncrementAmount() {
    dispatch(incrementByAmount(+counterNumber));
  }

  return (
    <View>
      <Text>Tab One: {counter.value}</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </Pressable>
      <TextInput value={counterNumber} onChangeText={setCounterNumber} />
      <Pressable onPress={handleIncrementAmount}>
        <Text>Add</Text>
      </Pressable>

      <Button text="teste" onPress={() => navigate.navigate("NewArticle")} />
    </View>
  );
}

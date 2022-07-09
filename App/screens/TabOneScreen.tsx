import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../navigation/types";
import { RootState } from "../store";
import { decrement, increment, incrementByAmount } from "../store/ducks/counter";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [counterNumber, setCounterNumber] = useState('');
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch()

  function handleIncrementAmount() {
    dispatch(incrementByAmount(+counterNumber));
  }

  return (
    <View >
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

      <View/>
    </View>
  );
}

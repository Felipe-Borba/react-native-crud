import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
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
    <View style={styles.container}>
      <Text style={styles.title}>Tab One: {counter.value}</Text>
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

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

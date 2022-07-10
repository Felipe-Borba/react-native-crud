import {
  Keyboard,
  KeyboardAvoidingView as _KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

type KeyboardAvoidingViewPros = {
  children: JSX.Element[];
};

export function KeyboardAvoidingView({ children }: KeyboardAvoidingViewPros) {
  return (
    <_KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>{children}</>
        </TouchableWithoutFeedback>
      </ScrollView>
    </_KeyboardAvoidingView>
  );
}

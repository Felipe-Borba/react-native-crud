import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store } from "./store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={colorScheme}>
            <StatusBar />
            <Navigation />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

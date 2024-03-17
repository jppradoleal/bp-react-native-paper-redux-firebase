import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from 'react-redux'
import { Routes } from "./routes";
import { store } from "./store";
import { MD3LightTheme } from 'react-native-paper'

export function Main() {
  return <ReduxProvider store={store}>
    <PaperProvider theme={MD3LightTheme}>
      <Routes />
    </PaperProvider>
  </ReduxProvider>
}

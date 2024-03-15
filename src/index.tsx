import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from 'react-redux'
import { Routes } from "./routes";
import { store } from "./store";


export function Main() {
  return <ReduxProvider store={store}>
    <PaperProvider>
      <Routes />
    </PaperProvider>
  </ReduxProvider>
}

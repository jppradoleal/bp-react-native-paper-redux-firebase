import { PaperProvider, Text } from "react-native-paper";
import { Routes } from "./routes";


export function Main () {
  return <PaperProvider>
    <Routes />
  </PaperProvider>
}
import { View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export function Main () {
  return <PaperProvider>
    <View>
      <Text>Hello World</Text>
    </View>
  </PaperProvider>
}
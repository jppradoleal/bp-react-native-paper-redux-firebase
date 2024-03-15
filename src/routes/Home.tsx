import { View } from "react-native";
import { Text } from "react-native-paper";
import { useAppSelector } from "../store";

export function Home() {
  const { name } = useAppSelector(state => state.user)

  return <View>
    <Text>Hello {name}</Text>
  </View>
}

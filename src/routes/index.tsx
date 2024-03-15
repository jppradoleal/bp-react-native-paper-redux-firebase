import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './Home';

const Stack = createNativeStackNavigator();

export function Routes() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
}
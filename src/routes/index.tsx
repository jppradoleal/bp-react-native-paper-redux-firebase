import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './Home';
import { CustomNavigationBar } from '../components/CustomNavigationBar';

const Stack = createNativeStackNavigator();

export function Routes() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      header: (props) => <CustomNavigationBar {...props} />
    }} initialRouteName='home'>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
}

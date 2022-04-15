import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen'

import * as NavigationBar from 'expo-navigation-bar'
import theme from '../styles/theme'
import { useTheme } from 'styled-components'

const Stack = createNativeStackNavigator()

function StackNavigation() {
  const { colors } = useTheme()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Minha Nota"
          component={MainScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto_400Regular',
              fontSize: 28
            },
            headerShadowVisible: false,
            headerTintColor: colors.text.primary
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

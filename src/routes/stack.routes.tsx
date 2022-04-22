import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from 'styled-components'
import FinalTestScreen from '../screens/FinalTestScreen'
import BackButton from '../components/BackButton'
import MainScreen from '../screens/MainScreen'
import TwoMonthsCalculatorScreen from '../screens/TwoMonthsCalculatorScreen'
import FourCalculatorScreen from '../screens/FourCalculatorScreen'

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

        <Stack.Screen
          name="Prova Final"
          component={FinalTestScreen}
          options={{
            headerLeft: () => <BackButton />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto_400Regular',
              fontSize: 28,
              color: colors.text.quaternary
            },
            headerShadowVisible: false,
            headerTintColor: colors.text.primary
          }}
        />

        <Stack.Screen
          name="Média Bimestral"
          component={TwoMonthsCalculatorScreen}
          options={{
            headerLeft: () => <BackButton />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto_400Regular',
              fontSize: 28,
              color: colors.text.tertiary
            },
            headerShadowVisible: false,
            headerTintColor: colors.text.primary
          }}
        />

        <Stack.Screen
          name="Último Bimestre"
          component={FourCalculatorScreen}
          options={{
            headerLeft: () => <BackButton />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto_400Regular',
              fontSize: 28,
              color: colors.text.tertiary
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

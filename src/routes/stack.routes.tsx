import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { GetName } from '../pages/GetName'

const Stack = createNativeStackNavigator()

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetName"
        component={GetName}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes

import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'

import { Confirmation } from '../pages/Confirmation'
import { GetName } from '../pages/GetName'

const Stack = createNativeStackNavigator()

function StackRoutes() {
  const [firstOpen, setFirstOpen] = useState(true)

  useEffect(() => {
    async function getName() {
      const value = await AsyncStorage.getItem('@MinhaNota:name')

      if (value !== null) {
        setFirstOpen(false)
      } else {
        setFirstOpen(true)
      }
    }

    getName()
  }, [])

  return (
    <Stack.Navigator>
      {firstOpen ? (
        <Stack.Screen
          name="GetName"
          component={GetName}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Confirm"
          component={Confirmation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  )
}

export default StackRoutes

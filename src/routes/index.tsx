import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import StackRoutes from './stack.routes'

function MainRoutes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}

export default MainRoutes

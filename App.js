import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetalhesScreen from './DetalhesScreen';
import SalvosScreen from './SalvosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Salvos" component={SalvosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

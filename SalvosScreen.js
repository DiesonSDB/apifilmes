import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetalhesScreen from './DetalhesScreen';
import SalvosScreen from './SalvosScreen';

const Stack = createStackNavigator();

const App = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} saveMovie={setSavedMovies} />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Salvos">
          {(props) => <SalvosScreen {...props} route={{ params: { savedMovies } }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddTodolis from './src/Screen/AddTodolis';
import ScreenInimah from './src/Screen/ScreenInimah';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewTodos">
          <Stack.Screen
            name="AddTodo"
            component={AddTodolis}
            options={{ title: 'Tambah To-Do' }}
          />
          <Stack.Screen
            name="ViewTodo"
            component={ScreenInimah}
            options={{ title: 'Lihat To-Do' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

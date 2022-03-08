import { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Frontpage from "./src/components/Frontpage.jsx"
import List from "./src/components/List.jsx"
import Start from "./src/components/Start.jsx"
import Time from "./src/components/Time.jsx"


const Stack = createNativeStackNavigator();

export default function App() {
  const [isCompany, setIsCompany] = useState(false)
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name="Frontpage"
          options={{ title: 'Frontpage' }}
        >
          {(props) => <Frontpage {...props} isCompany={isCompany} />}
        </Stack.Screen>
        <Stack.Screen 
          name="List"
          options={{ title: 'List' }}
        >
          {(props) => <List {...props} isCompany={isCompany} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Start"
          options={{ title: 'Start' }}
        >
          {(props) => <Start {...props} setIsCompany={setIsCompany} isCompany={isCompany} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Time"
          options={{ title: 'Time' }}
        >
          {(props) => <Time {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { Component } from 'react';
import { NativeBaseProvider, Image, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Daftar from './screens/Daftar';
import Favorit from './screens/Favorit';
import Menu from './screens/Menu';
import Profil from './screens/Profil';
import Resep from './screens/Resep';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#854d0e',
        tabBarInactiveTintColor: '#fde047',
        tabBarStyle: {
          height: 70,
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarShowLabel: true,
        unmountOnBlur: true,
      })}>
      <Tab.Screen
        name="Daftar_menu"
        component={Daftar}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="notebook"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="cutlery" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Favorit"
        component={Favorit}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="favorite" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="account-circle" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: 'transparent' },
            }}>
            <Stack.Screen
              name="Daftar"
              component={BottomNavigator}
              options={({ navigation }) => ({
                headerShown: false,
                title: '',
              })}
            />
            <Stack.Screen
              name="Resep"
              component={Resep}
              options={{ title: 'Resep Makanan' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;

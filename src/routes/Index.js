import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/Index';
import Register from '../screens/register/Index';
import Dashboard from '../screens/dashboard/Index';
import Detail from '../screens/detail/Index';
import {COLORS} from '../helpers/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.red,
          width: 300,
        },
      }}>
      <Drawer.Screen name="Test" />
    </Drawer.Navigator>
  );
};

const Index = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Hengky's Pokedex",
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});

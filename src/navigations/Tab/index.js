// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Drawer from "../Drawer"
import ShopStack from "../Shop"
import {Colors} from "../../styles";
import TabScreenNames  from "./tabScreens";
import Home from "../../screen/Home";
import Cart from "../../screen/Cart";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Shop') {
          iconName = focused ? 'search' : 'search';
        }
        else if (route.name === 'Account') {
          iconName = focused ? 'user' : 'user';
        }
        else if (route.name === 'Cart') {
          iconName = focused ? 'bag' : 'bag';
        }
        if (route.name === 'Home') {
          // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={size} color={color} />;
        } else if (route.name === 'Shop') {
         // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={size} color={color} />;
        }
        else if (route.name === 'Account') {
          // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />;
        }
        else if (route.name === 'Cart') {
         // You can return any component that you like here!
        return <SimpleLineIcons name={iconName} size={size} color={color} />;
        }

        
      },
      tabBarActiveTintColor:Colors.PRIMARY ,
      tabBarInactiveTintColor: Colors.GRAY,
    })} >
      <Tab.Screen name={TabScreenNames.Home.name} component={Home} options={{headerShown: false}} />
      <Tab.Screen name={TabScreenNames.Shop.name} component={ShopStack} options={{headerShown: false}} />
      <Tab.Screen name={TabScreenNames.Account.name}  component={Drawer}  options={{headerShown: false}} />
      <Tab.Screen name={TabScreenNames.Cart.name} component={Cart} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

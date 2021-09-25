import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from "../../screen/Shop";
import SubCategroy from "../../screen/SubCategroy";
import ProductDetial from "../../screen/ProductDetial";
import Gathr from "../../screen/Gathr";
import Nurtr from "../../screen/Nurtr";
import Elixr from "../../screen/Elixr";
import { commanHeaderStyle } from "../stack";
const Stack = createNativeStackNavigator();

function ShopStack() {
  return (
    <Stack.Navigator   screenOptions={commanHeaderStyle}>
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Gathr" component={Gathr} />
      <Stack.Screen name="Nurtr" component={Nurtr} />
      <Stack.Screen name="Elixr" component={Elixr} />
      <Stack.Screen name="SubCategroy" component={SubCategroy} />
      <Stack.Screen name="ProductDetial" component={ProductDetial} />
    </Stack.Navigator>
  );
}

export default ShopStack


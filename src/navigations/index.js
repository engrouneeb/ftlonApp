import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { commanHeaderStyle, screenArray } from "./stack";
import ScreensNames from "./stack/screenName";
// import screenNames from './tab/screenNames';

const Stack = createStackNavigator();

function createScreen(name, component, options) {
  return <Stack.Screen name={name} component={component} options={options} />;
}

function Navigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={commanHeaderStyle} //commend header styles
          initialRouteName={ScreensNames.Welcome.name} //default route
        >
          {screenArray.map((screens) => {
            return screens.map((val) => {
              return createScreen(
                val.name,
                val.component,
                val.navigationOptions
              );
            });
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default React.memo(Navigator);

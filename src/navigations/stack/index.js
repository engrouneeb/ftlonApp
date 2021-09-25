import ScreensNames from "./screenName";
import Home from "../../screen/Home";
import Login from "../../screen/Login";
import SignUp from "../../screen/SignUp";
import Welcome from "../../screen/Welcome";
import SignupOffer from "../../screen/SignupOffer";
import Checkout from "../../screen/Checkout";
import {Colors} from "../../styles";
import TabNavigator from "../Tab";

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
        elevation: 5,
        shadowColor: Colors.shadow,
        shadowOffset: {
          height: 0,
          width: -2,
        },
        shadowRadius: 15,
        shadowOpacity: 0.5,
      },
    };
  },
  headerShown: false,
  gestureEnabled: false,
};

export default Screens = {
  
  Home: {
    name: ScreensNames.Home.name,
    component: TabNavigator,
    navigationOptions: horizontalAnimation,
  },
  Login: {
    name: ScreensNames.Login.name,
    component: Login,
    navigationOptions: horizontalAnimation,
  },
  SignUp: {
    name: ScreensNames.Signup.name,
    component: SignUp,
    navigationOptions: horizontalAnimation,
  },
  Welcome: {
    name: ScreensNames.Welcome.name,
    component: Welcome,
    navigationOptions: horizontalAnimation,
  },
  SignupOffer: {
    name: ScreensNames.SignupOffer.name,
    component: SignupOffer,
    navigationOptions: horizontalAnimation,
  },
  Checkout: {
    name: ScreensNames.Checkout.name,
    component: Checkout,
    navigationOptions: horizontalAnimation,
  },
};

export const screenArray = Object.keys(Screens).map((key) => [Screens[key]]);

//use in Stack.Navigator
export const commanHeaderStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {},
  headerShown: false,
};

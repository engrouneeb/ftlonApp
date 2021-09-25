import React,{useEffect} from "react";
import SplashScreen from 'react-native-splash-screen';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Colors } from "./src/styles";
import Navigator from "./src/navigations";
const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#effbe3',
        100: '#d8efc0',
        200: '#bfe39b',
        300: '#a7d874',
        400: '#8fcc4d',
        500: '#75b335',
        600: '#5a8b27',
        700: '#40631b',
        800: '#253c0e',
        900: '#091500',
      },
      
    },
  });
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NativeBaseProvider theme={theme}>
      <Navigator />
      </NativeBaseProvider>
  );
};
export default App;
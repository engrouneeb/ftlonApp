import React from 'react'
import { StyleSheet, Text, View ,Image, Pressable, Platform} from 'react-native'
import ScreensNames from '../../navigations/stack/screenName';
import { Button} from 'native-base';
import {Colors,Typography} from "../../styles"

const Welcome = (props) => {
    return (
        <>
         <Image
        style={styles.logo}
        source={require('../../assets/images/ftlon_logo.png')}
      />
        <View style={styles.center}>
            <Text style={styles.welcomeText}>welcome !</Text>
            <Button  style={{marginTop:40,width:"90%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center"}} onPress={()=>{
                props.navigation.navigate(ScreensNames.Login.name)
            }}>
                <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>SIGN IN</Text>
            </Button>
            <Button  variant="outline"   style={{marginVertical:15,width:"90%",height:50,borderRadius:10,borderColor:Colors.BORDER_COLOR,justifyContent:"center"}} onPress={()=>{
                props.navigation.navigate(ScreensNames.Signup.name)
            }}>
                <Text style={{...Typography.FONT_REGULAR,color:Colors.TEXT_COLOR}}>CREATE AN ACCOUNT</Text>
            </Button>
            <Pressable styles={{marginTop:30}} onPress={()=>{
                
                 props.navigation.navigate(ScreensNames.Home.name)
            }}>
                <Text style={{...Typography.FONT_BOLD,fontSize:Typography.FONT_SIZE_16,color:Colors.PRIMARY}}>Continue as Guest</Text>
            </Pressable>
           
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    logo:{
        marginTop:Platform.OS=="android"?100: 200,
        alignSelf:"center",
        width:250,
        height:250,
        resizeMode:"contain"
    },
    welcomeText:{
        color:Colors.HEADING,
        fontSize:Typography.FONT_SIZE_30,
        marginTop:-60,
    },
    
  });
export default Welcome


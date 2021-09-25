import React from 'react'
import { StyleSheet, Text, View,Image, Pressable, Platform } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, Typography } from '../../styles';
import {Input,Stack,Button} from "native-base";
import ScreensNames from '../../navigations/stack/screenName';

const SignupOffer = (props) => {
    return (
        <>
        <View style={{height:200,flexDirection:"row",padding:10,margin:0}}>
            
            <Image 
            style={styles.logo}
            source={require('../../assets/images/ftlon_logo.png')}
            />
            <Pressable style={{position:"absolute",top:Platform.OS=="android"?50:80,right:20}} onPress={()=>{props.navigation.goBack()}}>
            <MaterialIcons  name={"close"} size={25} color = {Colors.GRAY} />
            </Pressable>
        </View>
        <View style={{marginTop:Platform.OS=="android"?140: 200,paddingLeft:20}}>
            <Text style={{fontSize:Typography.FONT_SIZE_18,fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.HEADING,}}>Get a discount</Text>
            <View style={{width:"100%",}}>
            <Stack space={4} w="100%" style={{marginTop:40}}>
            <Text style={{fontWeight:"300",
                            width:"90%",
                            fontSize:14,
                            color:Colors.TEXT_COLOR,
                            lineHeight:20}}>Sign up and get a reward! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Button  style={{marginTop:40,width:"90%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center"}} onPress={()=>{
                props.navigation.navigate(ScreensNames.Login.name)
            }}>
                <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>SIGN IN</Text>
            </Button>
            <Pressable styles={{marginTop:30,}} onPress={()=>{
                
                props.navigation.navigate(ScreensNames.Checkout.name)
           }}>
               <Text style={{...Typography.FONT_BOLD,fontSize:Typography.FONT_SIZE_16,color:Colors.PRIMARY,alignSelf:"center"}}>Continue as Guest</Text>
           </Pressable>
            </Stack>
            </View>
        </View>
        </>
    )
}

export default SignupOffer

const styles = StyleSheet.create({
    logo:{
        alignSelf:"flex-start",
        marginTop:Platform.OS=="android"?50: 80,
        marginLeft:10,
        height:150,
        width:150,
        resizeMode:"contain"
    }
})

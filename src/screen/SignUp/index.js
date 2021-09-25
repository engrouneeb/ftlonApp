import React from 'react'
import { StyleSheet, Text, View,Image, Pressable, Platform } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, Typography } from '../../styles';
import {Input,Stack,Button} from "native-base";
import ScreensNames from '../../navigations/stack/screenName';
const SignUp = (props) => {
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
        <View style={{marginTop:Platform.OS=="android"? 60: 100,paddingLeft:20}}>
            <Text style={{fontSize:Typography.FONT_SIZE_24,fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.HEADING,}}>Create an account</Text>
            <View style={{width:"100%",}}>
            <Stack space={4} w="100%" style={{marginTop:40}}>
            <Input
                w="95%"
                h="60"
                size="md"
                placeholder="First Name"
            />
            <Input
                w="95%"
                h="60"
                size="sm"
                placeholder="Last Name"
                style={{marginLeft:0}}
            />
            <Input
                w="95%"
                h="60"
                size="md"
                placeholder="Email"
            />
            <Input
                w="95%"
                h="60"
                size="sm"
                type="password"
                placeholder="Password"
                style={{marginLeft:0}}
            />
            <Button  style={{marginTop:20,width:"95%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center"}} onPress={()=>{
                props.navigation.navigate(ScreensNames.Home.name)
            }}>
                <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>CREATE</Text>
            </Button>
            </Stack>
            </View>
        </View>
        </>
    )
}
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
export default SignUp



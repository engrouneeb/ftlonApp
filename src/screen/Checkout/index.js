import React from 'react'
import { StyleSheet, Text, ScrollView,Image,View, Pressable, SafeAreaView } from 'react-native'
import{Icon,Checkbox, Input,Button } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors, Typography } from "../../styles";
import{Card} from "react-native-paper";
import ScreensNames from '../../navigations/stack/screenName';

const Checkout = (props) => {
    return (
    <SafeAreaView style={{backgroundColor:Colors.WHITE,height:"100%"}}>
      <View style={{flexDirection:"row",
            width:"92%",
            borderBottomWidth:.25,
            borderColor:Colors.GRAY,
            alignSelf:"center",
            paddingBottom:10,
            marginTop:20}}>
                <Pressable onPress={()=>{props.navigation.goBack()}}>
                <Icon as={AntDesign} name="left" color={Colors.BLACK} size={3} style={{marginRight:10,marginTop:5}}/>
                </Pressable>
           <Text style={{fontSize:16,color:Colors.TEXT_COLOR,fontWeight:"600"}}>Checkout</Text>
       </View>
       <View style={{flexDirection:"row",padding:20,width:"95%",
            paddingBottom:5,
            borderBottomWidth:.25,
            borderColor:Colors.GRAY,
            alignSelf:"center"}}>
       <Icon as={MaterialIcons} name="shopping-cart" color={Colors.BLACK+95} size={7} style={{marginRight:10,marginTop:5}}/>
       <Text style={{fontSize:15,color:Colors.TEXT_COLOR,fontWeight:"500",alignSelf:"center",marginHorizontal:10,}}>Order summary</Text>
       <Icon as={Entypo} name="chevron-down" color={Colors.BLACK+95} size={5} style={{marginRight:10,marginTop:10}}/>
       <Text style={{fontSize:15,color:Colors.TEXT_COLOR,fontWeight:"600",alignSelf:"center",marginLeft:50,}}>₹ 350.00</Text>
       </View>
       <View style={{height:"80%"}}>
       <ScrollView>
       <View style={{
           padding:20,
           width:"100%",
            paddingBottom:5,
            alignSelf:"center",
            justifyContent:"flex-start"}}>
       <Text style={{fontSize:14,color:Colors.TEXT_COLOR,fontWeight:"500",alignSelf:"flex-start",marginBottom:5}}>CONTACT INFORMATION</Text>
      
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Email"
            />
            <View style={{flexDirection:"row",marginVertical:20}}>
            <Text style={{fontSize:14,color:Colors.TEXT_COLOR,fontWeight:"300",alignSelf:"flex-start"}}>Already have an account?</Text>
            <Text style={{fontSize:15,color:Colors.PRIMARY,fontWeight:"700",alignSelf:"flex-start",marginLeft:10}}>Log in</Text>
            </View>
            <Text style={{fontSize:14,color:Colors.TEXT_COLOR,fontWeight:"500",alignSelf:"flex-start",marginBottom:5}}>SHIPPING ADDRESS</Text>   
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="First Name"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Last Name"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Address"
                style={{marginVertical:10}}
            /> 
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Apartment, suit, etc. (optional)"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="City"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Country/region"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="State"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Pin code"
                style={{marginVertical:10}}
            />
            <Input
                w="100%"
                h="50"
                size="md"
                placeholder="Phone"
                style={{marginVertical:10}}
            />
            <View style={{flexDirection:"row"}}>
                <Checkbox
                        
                        value="test"
                        accessibilityLabel="This is a dummy checkbox"
                        defaultIsChecked
                    />
                     <Text style={{fontSize:16,color:Colors.TEXT_COLOR,fontWeight:"500",alignSelf:"flex-start",marginLeft:10}}>Save this information for next time?</Text>
            </View>
        
       </View>
       </ScrollView>
       </View>
       <Button  style={{position:"absolute",marginTop:20,bottom:20, width:"90%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center",alignSelf:"center"}} 
                    onPress={()=>{
                        props.navigation.navigate(ScreensNames.SignupOffer.name)
                    }}>
                        <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>CHECK OUT</Text>
                    </Button> 
       </SafeAreaView>
    )
}

export default Checkout

const styles = StyleSheet.create({})

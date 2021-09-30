import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image,FlatList, Pressable } from 'react-native'
import{Icon, ScrollView} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors, Typography } from "../../styles";
import{Card} from "react-native-paper";
import ScreensNames from '../../navigations/stack/screenName';
const DATA = [
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_front_900x.jpg?v=1626191872"
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_back_1024x1024@2x.jpg?v=1626191872"
      },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_front_900x.jpg?v=1626191872"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_back_1024x1024@2x.jpg?v=1626191872"
    },
  ];
const Orders = () => {
    return (
        <SafeAreaView style={{backgroundColor:Colors.WHITE,height:"100%"}}>
         <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:25,paddingBottom:10}}>
            <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.TEXT_COLOR+60,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%"}}>3 Orders</Text>
         </View>
         <ScrollView>
         <>    
         <View>
         <View style={{flexDirection:"row"}}>
         <View style={{marginLeft:20,marginTop:20,borderBottomColor:Colors.PRIMARY,borderBottomWidth:3,height:40,width:"27%"}}>
             <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.BLACK,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%",textTransform:"uppercase",}}>Processing</Text>
         </View>
         <View style={{marginLeft:0,marginTop:20,borderBottomColor:Colors.BLACK+20,borderBottomWidth:3,height:40,width:"64%"}}>
        <Pressable onPress={()=>{}}>
         <Icon as={AntDesign} name="right" color={Colors.PRIMARY} size={5} style={{position:"absolute",right:10,top:5,fontWeight:"bold"}}/>
         </Pressable>
         </View>
         </View>
         <View style={{flexDirection:"row",width:"100%",height:100,marginLeft:20,}}>
             {DATA.map((item)=>{
                 return(
                            <Image 
                                source={{uri:item.url}} 
                                style={{width:"20%",borderBottomColor:Colors.TEXT_COLOR+50,
                                marginHorizontal:5,
                                borderBottomWidth:1,}} resizeMode={"contain"} >
                            </Image>
                 )
             })}
         </View>
         <View style={{borderBottomWidth:.25,width:"90%",borderColor:Colors.GRAY,marginLeft:20}}>
         <Text style={{fontWeight:"300",color:Colors.TEXT_COLOR,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%",marginTop:20}}>Order №: 38473737</Text>
         <Text style={{fontWeight:"300",color:Colors.TEXT_COLOR,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%",marginTop:5}}>Order date: 5 Jul 2021</Text>
         </View>
         </View>
         <View>
         <View>    
         <View style={{flexDirection:"row"}}>
         <View style={{marginLeft:20,marginTop:20,borderBottomColor:Colors.PRIMARY,borderBottomWidth:3,height:40,width:"60%"}}>
             <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.BLACK,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%",textTransform:"uppercase",}}>SENT</Text>
         </View>
         <View style={{marginLeft:0,marginTop:20,borderBottomColor:Colors.BLACK+20,borderBottomWidth:3,height:40,width:"30%"}}>
        <Pressable onPress={()=>{}}>
         <Icon as={AntDesign} name="right" color={Colors.PRIMARY} size={5} style={{position:"absolute",right:10,top:5,fontWeight:"bold"}}/>
         </Pressable>
         </View>
         </View>
         <View style={{flexDirection:"row",width:"100%",height:100,marginLeft:20,}}>
             {DATA.map((item)=>{
                 return(
                            <Image 
                                source={{uri:item.url}} 
                                style={{width:"20%",borderBottomColor:Colors.TEXT_COLOR+50,
                                marginHorizontal:5,
                                borderBottomWidth:1,}} resizeMode={"contain"} >
                            </Image>
                 )
             })}
         </View>
         </View>
         <View style={{flexDirection:"row",borderBottomWidth:.25,width:"90%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:25,paddingBottom:10,}}>
            <Text style={{fontWeight:"300",color:Colors.PRIMARY,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%"}}>Track Order</Text>
         </View>
         <View style={{borderBottomWidth:.25,width:"90%",borderColor:Colors.GRAY,marginLeft:20}}>
         <Text style={{fontWeight:"300",color:Colors.TEXT_COLOR,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%",marginTop:20}}>Order №: 38473737</Text>
         <Text style={{fontWeight:"300",color:Colors.TEXT_COLOR,fontSize:Typography.FONT_SIZE_14,marginBottom:15,width:"85%",marginTop:5}}>Order date: 5 Jul 2021</Text>
         </View>
         </View>
         <View>
         <View style={{flexDirection:"row"}}>
         <View style={{marginLeft:20,marginTop:20,borderBottomColor:Colors.PRIMARY,borderBottomWidth:3,height:40,width:"27%"}}>
             <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.BLACK,fontSize:Typography.FONT_SIZE_14,marginBottom:5,width:"85%",textTransform:"uppercase",}}>DELIVERED</Text>
         </View>
         <View style={{marginLeft:0,marginTop:20,borderBottomColor:Colors.PRIMARY,borderBottomWidth:3,height:40,width:"62%"}}>
        <Pressable onPress={()=>{}}>
         <Icon as={AntDesign} name="right" color={Colors.PRIMARY} size={5} style={{position:"absolute",right:10,top:5,fontWeight:"bold"}}/>
         </Pressable>
         </View>
         </View>
         <View style={{flexDirection:"row",width:"100%",height:100,marginLeft:20,}}>
             {DATA.map((item)=>{
                 return(
                            <Image 
                                source={{uri:item.url}} 
                                style={{width:"20%",borderBottomColor:Colors.TEXT_COLOR+50,
                                marginHorizontal:5,
                                borderBottomWidth:1,}} resizeMode={"contain"} >
                            </Image>
                 )
             })}
         </View>
         </View>
         </>
         </ScrollView>
         </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
})
export default Orders

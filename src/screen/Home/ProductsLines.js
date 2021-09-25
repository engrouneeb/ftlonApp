import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';
import {Colors, Typography,Shadow} from "../../styles";
import{Card} from "react-native-paper";

const ProductsLines = () => {
    return (
        <View style={{marginLeft:15,marginTop:10,}}>
        <Text style={{color:Colors.PRIMARY,marginVertical:20,fontSize:Typography.FONT_SIZE_16,fontWeight:Typography.FONT_WEIGHT_REGULAR}}>Products lines</Text>
        <View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator ={false} >
        <Card style={{
            height:100,
            width:180,
            marginRight:15,
            marginVertical:5,
            borderColor:Colors.BLACK,
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: .5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2.22,
            elevation: 5}}>
                
            <Image 
                source={require("../../assets/images/gathr.png")} 
                style={{position:"absolute",top:25,height:60, width:"70%",left:20,zIndex:10}} resizeMode={"contain"} >
           </Image>
            <Image 
                source={require("../../assets/images/wheat.png")} 
                style={{position:"absolute",height:80, width:"70%",left:"46%",top:25}} resizeMode={"contain"} >
           </Image>
        </Card>
        
        <Card style={{
           height:100,
            width:180,
            borderColor:Colors.BLACK,
            borderRadius:10,
            marginRight:15,
            marginVertical:5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: .5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2.22,
            elevation: 3}}>
                
                <Image 
                source={require("../../assets/images/nurtr_logo.png")} 
                style={{position:"absolute",top:20,height:60, width:"70%",left:20,zIndex:10}} resizeMode={"contain"} >
           </Image>
            <Image 
                source={require("../../assets/images/green_leaf.png")} 
                style={{position:"absolute",height:90, width:"80%",left:"48%",top:5}} resizeMode={"contain"} >
           </Image>
           </Card>
           <Card style={{
           height:100,
            width:180,
            borderRadius:10,
            marginVertical:5,
            borderColor:Colors.BLACK,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: .5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2.22,
            elevation: 3}}>
            <Image 
                source={require("../../assets/images/elixr.png")} 
                style={{position:"absolute",top:15,height:60, width:"60%",left:20,zIndex:10}} resizeMode={"contain"} >
           </Image>
            <Image 
                source={require("../../assets/images/face.png")} 
                style={{position:"absolute",height:100, width:"70%",left:"45%",top:0,overflow:"hidden",borderTopRightRadius:10,borderBottomRightRadius:10}} resizeMode={"contain"} >
           </Image>
        </Card>
        </ScrollView>
        </View>
        </View> 
    )
}

export default ProductsLines

const styles = StyleSheet.create({})

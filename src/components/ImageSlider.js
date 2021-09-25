import React,{useEffect,useRef} from 'react'
import { StyleSheet,Dimensions,ScrollView,ImageBackground,View } from 'react-native';
import {Text,Button, Icon} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
const { width, height } = Dimensions.get('window');
import {Colors,Typography} from "../styles"
const ImageSlider = () => {
    const scrollViewRef = useRef();
    // useEffect(() => {
    //     const numOfBackground = 3;
    //     let scrollValue = 0, scrolled = 0;
    //     setInterval(function () {
    //         scrolled++;
    //         if(scrolled < numOfBackground)
    //             scrollValue = scrollValue + width;
    //         else{
    //             scrollValue = 0;
    //             scrolled = 0
    //         }
    //         scrollViewRef?.current?.scrollTo({ x: scrollValue, animated: false })
    //     }, 3000);
    // }, [])
    return (
        <View style={{height:220}}>
       <ScrollView 
        ref={scrollViewRef}
        horizontal={true} pagingEnabled={true} 
        >
          <ImageBackground source={{uri:"https://cdn.shopify.com/s/files/1/0473/0440/9250/files/main_preview_300x300.png?v=1601555453"}} style={{height:200, width}} resizeMode="cover">
              <View style={{flexDirection:"row",marginVertical:20,marginLeft:15}}>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.WHITE,marginHorizontal:4}}></View>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
              </View>
          <Text style={{ paddingHorizontal:10, color:Colors.WHITE,marginLeft:10,fontWeight:"600",lineHeight:25}}>Organic, eco-friendly, and innovative  products sourced directly from farmers, artisans, and certified partners.</Text>
          <View variant="outline" 
          style={{flexDirection:"row", 
          marginLeft:20,
          marginVertical:20,
          borderColor:Colors.WHITE,borderRadius:10,borderWidth:1,width:150,height:40,justifyContent:"center",alignItems:"center"}}>
               <Text style={{color:Colors.WHITE, fontSize:Typography.FONT_SIZE_12,fontWeight:"600",alignSelf:"center",marginRight:10}}> SHOP NOW </Text>
               <Icon as={AntDesign} name="arrowright" color={Colors.WHITE} size={4}/>
              </View> 
          </ImageBackground>
          <ImageBackground source={{uri:"https://cdn.shopify.com/s/files/1/0473/0440/9250/files/oils_1_300x300.jpg?v=1627474388"}} style={{height:200, width}} resizeMode="cover">
              <View style={{flexDirection:"row",marginVertical:20,marginLeft:15}}>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.WHITE,marginHorizontal:4}}></View>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
              </View>
          <Text style={{ paddingHorizontal:10, color:Colors.WHITE,marginLeft:10,fontWeight:"600",lineHeight:25}}>Bull driven extracted natural oils  Chemical free, superior tasting oils made by women self-help groups..</Text>
          <View variant="outline" 
          style={{flexDirection:"row", 
          marginLeft:20,
          marginVertical:20,
          borderColor:Colors.WHITE,borderRadius:10,borderWidth:1,width:150,height:40,justifyContent:"center",alignItems:"center"}}>
               <Text style={{color:Colors.WHITE, fontSize:Typography.FONT_SIZE_12,fontWeight:"600",alignSelf:"center",marginRight:10}}> SHOP NOW </Text>
               <Icon as={AntDesign} name="arrowright" color={Colors.WHITE} size={4}/>
              </View> 
          </ImageBackground>
          <ImageBackground source={{uri:"https://cdn.shopify.com/s/files/1/0473/0440/9250/files/grains_image_only_1_300x300.jpg?v=1627471098"}} style={{height:200, width}} resizeMode="cover">
              <View style={{flexDirection:"row",marginVertical:20,marginLeft:15}}>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:6,width:6,borderRadius:3,backgroundColor:Colors.WHITE,marginHorizontal:4}}></View>
              </View>
          <Text style={{ paddingHorizontal:10, color:Colors.WHITE,marginLeft:10,fontWeight:"600",lineHeight:25}}>Ancient, indigenous, and organically grown heirloom grains Natural, nutritious  Natural, nutritious, and tasty varieties.</Text>
          <View variant="outline" 
          style={{flexDirection:"row", 
          marginLeft:20,
          marginVertical:20,
          borderColor:Colors.WHITE,borderRadius:10,borderWidth:1,width:150,height:40,justifyContent:"center",alignItems:"center"}}>
               <Text style={{color:Colors.WHITE, fontSize:Typography.FONT_SIZE_12,fontWeight:"600",alignSelf:"center",marginRight:10}}> SHOP NOW </Text>
               <Icon as={AntDesign} name="arrowright" color={Colors.WHITE} size={4}/>
              </View> 
          </ImageBackground>
       </ScrollView>
       
     </View>
    )
}

export default ImageSlider

const styles = StyleSheet.create({})

import React,{useEffect,useRef} from 'react'
import { StyleSheet,Dimensions,ScrollView,Image,View } from 'react-native';
const { width, height } = Dimensions.get('window');
import {Colors,Typography} from "../styles"
const ProductImageSlider = () => {
    const scrollViewRef = useRef();
    useEffect(() => {
        const numOfBackground = 3;
        let scrollValue = 0, scrolled = 0;
        setInterval(function () {
            scrolled++;
            if(scrolled < numOfBackground)
                scrollValue = scrollValue + width;
            else{
                scrollValue = 0;
                scrolled = 0
            }
            scrollViewRef?.current?.scrollTo({ x: scrollValue, animated: false })
        }, 3000);
    }, [])
    return (
        <View style={{height:220}}>
       <ScrollView 
        ref={scrollViewRef}
        horizontal={true} pagingEnabled={true} 
        >
            <View style={{width,justifyContent:"center"}}>
          <Image source={{uri:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/toordal_1_600x400_1bd49f70-f5ae-40a1-97fc-63887671f5d5_1024x1024@2x.jpg?v=1601636816?v=1626191973"}} style={{height:150, width:"50%",alignSelf:"center"}} resizeMode="cover"/>
              <View style={{position:"absolute",bottom:-5,left:5}}>
              <View style={{flexDirection:"row",marginVertical:20,marginLeft:15}}>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.BLACK,marginHorizontal:4}}></View>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
              </View>
              </View>
              </View>
          <View style={{width,justifyContent:"center"}}>
          <Image source={{uri:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Wheat-Whole_website_back_1024x1024@2x.jpg?v=1626191974"}} style={{height:150, width:"50%",alignSelf:"center"}} resizeMode="cover"/>
              <View style={{position:"absolute",bottom:-5,left:5}}>
              <View style={{flexDirection:"row",marginVertical:20,marginLeft:15}}>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.BLACK,marginHorizontal:4}}></View>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
              </View>
              </View>
              </View>
          <View style={{width,justifyContent:"center",}}>
          <Image source={{uri:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_front_900x.jpg?v=1626191872"}} style={{height:150, width:"50%",alignSelf:"center"}} resizeMode="cover"/>
              <View style={{position:"absolute",bottom:-5,left:5}}>
              <View style={{flexDirection:"row",marginVertical:20,marginLeft:15}}>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.GRAY,marginHorizontal:4}}></View>
                  <View style={{height:8,width:8,borderRadius:4,backgroundColor:Colors.BLACK,marginHorizontal:4}}></View>
              </View>
              </View>
              </View>
       </ScrollView>
       
     </View>
    )
}

export default ProductImageSlider

const styles = StyleSheet.create({})

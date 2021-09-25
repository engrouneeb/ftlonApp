import React from "react";
import { SafeAreaView, Text,StyleSheet, ScrollView } from "react-native";
import {Icon, View} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ImageSlider from "../../components/ImageSlider";
import ProductsLines from "./ProductsLines";
import BestSellingProducts from "./BestSellingProducts";
import { Colors, Typography } from "../../styles";
import NewProducts from "./NewProducts";
const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:Colors.WHITE}}>
      <Text style={{color:Colors.PRIMARY,fontSize:Typography.FONT_SIZE_18,fontWeight:Typography.FONT_WEIGHT_BOLD,alignSelf:"center",marginVertical:10}}> FTLON </Text>
      <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,marginBottom:7,alignSelf:"center",marginTop:25}}>
        <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.GRAY,fontSize:Typography.FONT_SIZE_16,marginBottom:5,width:"85%"}}>Search Products</Text>
        <Icon as={AntDesign} name="search1" color={Colors.BLACK} size={5} style={{marginRight:10}}/>
        <Icon as={MaterialCommunityIcons} name="qrcode-scan" color={Colors.BLACK} size={4}/>
      </View>
      <ScrollView style={{height:"86.3 %"}}>
      <ImageSlider/>
      <ProductsLines/>
      <BestSellingProducts/>
      <NewProducts/>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;
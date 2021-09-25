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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pulses',
    url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/pinksaltpowder_1024x1024@2x.jpg?v=1625479863"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Grains',
    url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/groundnut_oil_2_1024x1024@2x.jpg?v=1624807083"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Oils',
    url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Gandhasalu_website_3_1024x1024@2x.jpg?v=1628842154"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Salts',
    url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Almond_900x.jpg?v=1625479760"
  },
];

const Item = ( {item}) => (
  <Card style={{
  width:"45%",
  marginLeft:10,
  marginTop:10,
  height:65}}>
    <View style={{flexDirection:"row",marginTop:10}}>
                   <Image 
                      source={{uri:item.url}} 
                      style={{height:50,width:50,marginHorizontal:10,borderRadius:5}}  >
                    </Image>
    <Text style={{alignSelf:"center"}}>{item.title}</Text>
    </View>
  </Card>
);

 const Shop=(props)=> {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
    return (
        <SafeAreaView style={{backgroundColor:Colors.WHITE}}>
           <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,marginBottom:7,alignSelf:"center",marginTop:25,paddingBottom:10}}>
              <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.GRAY,fontSize:Typography.FONT_SIZE_16,marginBottom:5,width:"85%"}}>Search Products</Text>
              <Icon as={AntDesign} name="search1" color={Colors.BLACK} size={5} style={{marginRight:10}}/>
              <Icon as={MaterialCommunityIcons} name="qrcode-scan" color={Colors.BLACK} size={4}/>
            </View>
            <View style={{flexDirection:"row",marginLeft:-20}}>             
            <Image 
                source={require("../../assets/images/gathr.png")} 
                style={{ marginTop:22,width:"50%",height:35}} resizeMode={"contain"} >
           </Image>
           <View style={{flex:.4,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:22}}>
           <Pressable style={{flexDirection:"row"}} onPress={()=>{props.navigation.navigate(ScreensNames.Gathr.name)}}>
           <Text style={{fontSize:12,fontWeight:"400",color:Colors.TEXT_COLOR,marginLeft:60}}>View all</Text>
           <Icon as={AntDesign} name="arrowright" color={Colors.TEXT_COLOR} size={4} style={{marginLeft:10}}/>
           </Pressable>
           </View>
           </View>
           <FlatList
              data={DATA}
              numColumns={2}
              style={{height:160}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
           <View style={{flexDirection:"row",paddingLeft:20}}>           
            <Image 
                source={require("../../assets/images/nurtr_logo.png")} 
                style={{ marginTop:22,width:"50%",height:40}} resizeMode={"contain"} >
           </Image>
           <View style={{flex:.4,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:22}}>
           <Pressable style={{flexDirection:"row"}} onPress={()=>{props.navigation.navigate(ScreensNames.Nurtr.name)}}>
           <Text style={{fontSize:12,fontWeight:"400",color:Colors.TEXT_COLOR,marginLeft:30}}>View all</Text>
           <Icon as={AntDesign} name="arrowright" color={Colors.TEXT_COLOR} size={4} style={{marginLeft:10}}/>
           </Pressable>
           </View>
           </View>
           <FlatList
              data={DATA}
              numColumns={2}
              style={{height:160}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
           <View style={{flexDirection:"row",}}>
            <Image 
                source={require("../../assets/images/elixr.png")} 
                style={{ marginTop:22,width:"50%",height:40}} resizeMode={"contain"} >
           </Image>
           <View style={{flex:.4,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:20}}>
             <Pressable style={{flexDirection:"row"}} onPress={()=>{props.navigation.navigate(ScreensNames.Elixr.name)}}>
              <Text style={{fontSize:12,fontWeight:"400",color:Colors.TEXT_COLOR,marginLeft:30}}>View all</Text>
              <Icon as={AntDesign} name="arrowright" color={Colors.TEXT_COLOR} size={4} style={{marginLeft:10}}/>
            </Pressable>
           </View>
           </View>
           <FlatList
              data={DATA}
              numColumns={2}
              style={{height:160}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
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
  });

export default Shop;
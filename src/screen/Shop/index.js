import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image,FlatList, Pressable } from 'react-native'
import{Icon, ScrollView} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors, Typography } from "../../styles";
import{Card} from "react-native-paper";
import ScreensNames from '../../navigations/stack/screenName';
const gethr = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pulses',
    url:require('../../assets/images/dal.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Oils',
    url:require('../../assets/images/oil.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Grains',
    url:require('../../assets/images/grains.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Salts',
    url:require('../../assets/images/Salt.png')
  },
];
const nurtr = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Plants',
    url:require('../../assets/images/plants2.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pots',
    url:require('../../assets/images/empty_pot.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Garden tools',
    url:require('../../assets/images/gardentool.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lanterns',
    url:require('../../assets/images/lat.png')
  },
];
const elixr = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Soap',
    url:require('../../assets/images/soap1.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Shampoo',
    url:require('../../assets/images/shampo1.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cream',
    url:require('../../assets/images/Cream.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hair products',
    url:require('../../assets/images/brown_hair.png')
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
                      source={item.url} 
                      style={{height:40,width:40,marginHorizontal:10}}  >
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
        <SafeAreaView style={{backgroundColor:Colors.WHITE,height:"100%"}}>
           <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,marginBottom:7,alignSelf:"center",marginTop:25,paddingBottom:10}}>
              <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.GRAY,fontSize:Typography.FONT_SIZE_16,marginBottom:5,width:"85%"}}>Search Products</Text>
              <Icon as={AntDesign} name="search1" color={Colors.BLACK} size={5} style={{marginRight:10}}/>
              <Icon as={MaterialCommunityIcons} name="qrcode-scan" color={Colors.BLACK} size={4}/>
            </View>
            <View style={{flexDirection:"row",width:"90%",}}>             
            <Image 
                source={require("../../assets/images/gathr.png")} 
                style={{ marginTop:5,width:"45%",height:35}} resizeMode={"contain"} >
           </Image>
           <Pressable style={{flexDirection:"row",alignSelf:"center",marginLeft:30,marginTop:15}} onPress={()=>{props.navigation.navigate(ScreensNames.Gathr.name)}}>
           <Text style={{fontSize:12,fontWeight:"400",color:Colors.TEXT_COLOR,marginLeft:60,}}>View all</Text>
           <Icon as={AntDesign} name="arrowright" color={Colors.TEXT_COLOR} size={4} style={{marginLeft:10}}/>
           </Pressable>
           </View>
           <FlatList
              data={gethr}
              numColumns={2}
              style={{height:160}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
           <View style={{flexDirection:"row",width:"90%",}}>           
            <Image 
                source={require("../../assets/images/nurtr_logo.png")} 
                style={{ marginTop:5,width:"45%",height:40}} resizeMode={"contain"} >
           </Image>
           
           <Pressable style={{flexDirection:"row",alignSelf:"center",marginLeft:40,marginTop:15}} onPress={()=>{props.navigation.navigate(ScreensNames.Nurtr.name)}}>
           <Text style={{fontSize:12,fontWeight:"400",color:Colors.TEXT_COLOR,marginLeft:45}}>View all</Text>
           <Icon as={AntDesign} name="arrowright" color={Colors.TEXT_COLOR} size={4} style={{marginLeft:10}}/>
           </Pressable>
           </View>
           <FlatList
              data={nurtr}
              numColumns={2}
              style={{height:160}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
           <View style={{flexDirection:"row",width:"90%",}}>
            <Image 
                source={require("../../assets/images/elixr.png")} 
                style={{ marginTop:5,width:"45%",height:40}} resizeMode={"contain"} >
           </Image>
             <Pressable style={{flexDirection:"row",alignSelf:"center",marginLeft:40,marginTop:15}} onPress={()=>{props.navigation.navigate(ScreensNames.Elixr.name)}}>
              <Text style={{fontSize:12,fontWeight:"400",color:Colors.TEXT_COLOR,marginLeft:45}}>View all</Text>
              <Icon as={AntDesign} name="arrowright" color={Colors.TEXT_COLOR} size={4} style={{marginLeft:10}}/>
            </Pressable>
           </View>
           <FlatList
              data={elixr}
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
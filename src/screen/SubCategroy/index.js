import React from 'react'
import { StyleSheet, Text, FlatList,Image,View,SafeAreaView, Pressable } from 'react-native'
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
      url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/toordal_1_600x400_1bd49f70-f5ae-40a1-97fc-63887671f5d5_1024x1024@2x.jpg?v=1601636816"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Grains',
      url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/toordal_1_600x400_1bd49f70-f5ae-40a1-97fc-63887671f5d5_1024x1024@2x.jpg?v=1601636816"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Oils',
      url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_front_900x.jpg?v=1626191872"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Salts',
      url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Toor-Dal_website_back_1024x1024@2x.jpg?v=1626191872"
    },
  ];
const Item = ( {item,navigation}) => (
    <Pressable 
    onPress={()=>{
        navigation.navigate(ScreensNames.ProductDetial.name)
    }}
    style={{
        width:"50%",
        marginLeft:10}}> 
        <Image 
            source={{uri:item.url}} 
            style={{width:"100%",borderBottomColor:Colors.TEXT_COLOR+50,
            height:200,
            borderBottomWidth:1,}} resizeMode={"contain"} >
        </Image>
            <Text style={{fontWeight:"500",fontSize:16,color:Colors.TEXT_COLOR,marginTop:10}}>Seasame Oil</Text>
            <Text style={{fontWeight:"300",fontSize:12,color:Colors.TEXT_COLOR,marginTop:5}}>500 gm</Text>
            <Text style={{fontWeight:"600",fontSize:16,color:Colors.TEXT_COLOR,marginVertical:5}}>₹ 90.00</Text>
    </Pressable>
  );
const SubCategroy = (props) => {
    const renderItem = ({ item }) => (
        <Item item={item} navigation={props.navigation} />
      );
    return (
        <SafeAreaView style={{backgroundColor:Colors.WHITE}}>
           <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:25,paddingBottom:10}}>
                <Pressable onPress={()=>{props.navigation.goBack()}}>
                <Icon as={AntDesign} name="left" color={Colors.BLACK} size={3} style={{marginRight:10,marginTop:-5}}/>
                </Pressable>
              <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.GRAY,fontSize:Typography.FONT_SIZE_16,marginBottom:5,width:"75%"}}></Text>
              <Icon as={AntDesign} name="search1" color={Colors.BLACK} size={5} style={{marginRight:10}}/>
              <Icon as={MaterialCommunityIcons} name="qrcode-scan" color={Colors.BLACK} size={4}/>
            </View>
            <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:15,paddingBottom:20}}>
                <Text style={{fontSize:Typography.FONT_SIZE_18,fontWeight:"500"}}>Pulses</Text>
            </View>
            <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",height:40,borderColor:Colors.GRAY,alignSelf:"center",flexDirection:"row",justifyContent:"center",}}>
                <View style={{width:"50%",borderRightWidth:.5,borderColor:Colors.GRAY,flexDirection:"row",justifyContent:"space-around"}}>
                    <Text style={{fontWeight:"300",fontSize:12,alignSelf:"center"}}>Filter by</Text>
                    <Text style={{fontWeight:"300",fontSize:12,alignSelf:"center"}}>...</Text>
                </View>
                <View style={{width:"50%",flexDirection:"row",justifyContent:"space-around"}}>
                    <Text style={{fontWeight:"300",fontSize:12,alignSelf:"center"}}>Sort by</Text>
                    <Text style={{fontWeight:"300",fontSize:12,alignSelf:"center"}}>...</Text>
                </View> 
            </View>
            <FlatList
              data={DATA}
              numColumns={2}
              style={{height:"79%"}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            </SafeAreaView>
    )
}

export default SubCategroy

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, FlatList,Image,View, Pressable, SafeAreaView } from 'react-native'
import{Icon,Button, ScrollView,} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors, Typography } from "../../styles";
import{Card} from "react-native-paper";
import ScreensNames from '../../navigations/stack/screenName';
import { flexDirection } from 'styled-system';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pulses',
    url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Wheat-Whole_website_front_1024x1024@2x.jpg?v=1626191973"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Grains',
    url:"https://cdn.shopify.com/s/files/1/0473/0440/9250/products/Wheat-Whole_website_back_1024x1024@2x.jpg?v=1626191974"
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
      width:"100%",
      marginLeft:10,
      flexDirection:"row",
      borderBottomColor:Colors.TEXT_COLOR+50,
      borderBottomWidth:1,}}> 
      <Image 
          source={{uri:item.url}} 
          style={{width:130,
          height:130,
          }} 
          resizeMode={"contain"} >
      </Image>
      <View style={{marginLeft:10}}>
          <Text style={{fontWeight:"500",fontSize:16,color:Colors.TEXT_COLOR,marginTop:20}}>Seasame Oil</Text>
          <View style={{flexDirection:"row",marginTop:5}}>
            <Text style={{fontWeight:"200",fontSize:10,color:Colors.TEXT_COLOR,}}>Bull Driven</Text>
            <Text style={{fontWeight:"200",fontSize:10,color:Colors.TEXT_COLOR,marginLeft:5}}>500 gm</Text>
          </View>
          <View style={{width:"100%",flexDirection:"row",marginVertical:20}}>
                        <View style={{flexDirection:"row",padding:5}}>
                            <Pressable onPress={()=>{}}>
                                <Card style={{height:25,width:25,justifyContent:"center",alignItems:"center",paddingTop:3,marginLeft:10}}>
                                    <Icon as={Entypo} name="minus" color={Colors.BLACK} size={4} style={{alignSelf:"center"}}/>
                                </Card>
                            </Pressable>
                            <Text style={{fontSize:20,fontWeight:"600",color:Colors.TEXT_COLOR,marginHorizontal:20}}>1</Text>
                            <Pressable onPress={()=>{}}>
                                <Card style={{height:25,width:25,justifyContent:"center",alignItems:"center",paddingTop:3}}>
                                <Icon as={Entypo} name="plus" color={Colors.BLACK} size={4} style={{alignSelf:"center"}}/>
                                </Card>
                            </Pressable>
                        </View>
                        <Text style={{fontWeight:"600",fontSize:16,color:Colors.TEXT_COLOR,marginTop:10,marginLeft:20,width:"35%"}}>₹ 90.00</Text>
                    </View>
          </View>
  </Pressable>
);
  const Cart =(props) =>{
    const renderItem = ({ item }) => (
      <Item item={item} navigation={props.navigation} />
    );
    return (
      <SafeAreaView style={{backgroundColor:Colors.WHITE,height:"100%"}}>
      <View style={{flexDirection:"row",
            borderBottomWidth:.25,
            width:"92%",borderColor:Colors.GRAY,
            alignSelf:"center",
            marginTop:25,
            paddingBottom:10}}>
           <Text style={{fontSize:20,color:Colors.TEXT_COLOR,fontWeight:"600"}}>Cart</Text>
       </View>
       <FlatList
              data={DATA}
              style={{maxHeight:"65%"}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <View style={{height:"25%"}}>
              <View style={{flexDirection:"row",paddingHorizontal:20,marginTop:20}}>
                <Text style={{fontWeight:"400",fontSize:14,color:Colors.GRAY,width:"60%"}}>subtotal</Text>
                <Text style={{fontWeight:"500",fontSize:16,color:Colors.GRAY+50,width:"30%",alignSelf:"flex-end"}}>₹ 90.00</Text>
              </View>
              <Text style={{fontWeight:"200",fontSize:10,color:Colors.TEXT_COLOR,paddingHorizontal:20,marginTop:20}}>{`Tax included.\n Shipping calculated at checkout.`}</Text>
              
            </View>
            <Button  style={{position:"absolute",bottom:15, width:"90%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center",alignSelf:"center"}} 
                    onPress={()=>{
                        props.navigation.navigate(ScreensNames.SignupOffer.name)
                    }}>
                        <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>CHECK OUT</Text>
                    </Button> 
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
export default Cart;
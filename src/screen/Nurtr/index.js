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
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pots',
    url:require('../../assets/images/pots.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Plants',
    url:require('../../assets/images/plants.png')
  },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Lanterns',
    url:require('../../assets/images/lanterns.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Accessories',
    url:require('../../assets/images/accessories.png')
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Tools',
      url:require('../../assets/images/tools.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Sculptors',
    url:require('../../assets/images/sculptors.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fountains',
    url:require('../../assets/images/fountains.png')
    },
  ];
  
  const Item = ( {item,navigation}) => (
  
      <View style={{marginTop:10, 
    width:"30%",
    margin:5,
    justifyContent:"center",
    alignItems:"center"}}>
        <Pressable onPress={()=>{navigation.navigate(ScreensNames.SubCategroy.name)}}>
                     <Image 
                        source={item.url} 
                        style={{height:80,width:80,marginHorizontal:5}} resizeMode={"contain"}  >
                      </Image>
      <Text style={{marginTop:10, alignSelf:"center",fontWeight:"400",fontSize:14,color:Colors.TEXT_COLOR}}>{item.title}</Text>
      </Pressable>
      </View>
  );
const Nurtr = (props) => {
    const renderItem = ({ item }) => (
        <Item item={item} navigation={props.navigation} />
      );
    return (
        <SafeAreaView style={{backgroundColor:Colors.WHITE}}>
           <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,marginBottom:7,alignSelf:"center",marginTop:25,paddingBottom:10}}>
                <Pressable onPress={()=>{props.navigation.goBack()}}>
                <Icon as={AntDesign} name="left" color={Colors.BLACK} size={3} style={{marginRight:10,marginTop:-5}}/>
                </Pressable>
              <Text style={{fontWeight:Typography.FONT_WEIGHT_BOLD,color:Colors.GRAY,fontSize:Typography.FONT_SIZE_16,marginBottom:5,width:"75%"}}></Text>
              <Icon as={AntDesign} name="search1" color={Colors.BLACK} size={5} style={{marginRight:10}}/>
              <Icon as={MaterialCommunityIcons} name="qrcode-scan" color={Colors.BLACK} size={4}/>
            </View>
            <Image 
                source={require("../../assets/images/nurtr_logo.png")} 
                style={{ marginVertical:15,width:"50%",height:50,marginLeft:-10}} resizeMode={"contain"} >
           </Image>
            <FlatList
              data={DATA}
              numColumns={3}
              style={{height:"82%"}}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
        </SafeAreaView>    
    )
}

export default Nurtr

const styles = StyleSheet.create({})

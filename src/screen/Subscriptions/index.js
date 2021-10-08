import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Input, Button } from "native-base";
import { Colors, Typography } from "../../styles";
const Subscriptions = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
    <View 
      style={{
            width: "92%",
            marginTop: 15,
            paddingBottom: 15,
            alignSelf: "center",
          }}
    >

      <View
        style={{
          marginTop: "20%",
          alignItems: "center",
          marginBottom:'20%',
        }}
      >
         <Image 
          source={require('../../assets/images/subscription.png')} 
          style={{width:100,
          height:150,
          }} 
          resizeMode={"contain"} >
      </Image>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "500",
            color: "#314626",
            fontSize: Typography.FONT_SIZE_16,
            marginBottom: 5,
          }}
        >
          Stay tuned
        </Text>
        <Text
          style={{
            color: Colors.BLACK,
            fontSize: Typography.FONT_SIZE_14,
            lineHeight:20,
            fontSize:16,
            fontWeight:"300",
            marginBottom: 5,
            marginTop:10
          }}
        >
        Subscribe to our newsletter and never miss our latest news</Text>
      </View>
    </View>
    <View style={{justifyContent:"center",alignItems:"center",marginTop:100}}>
    <Input
                w="90%"
                h="50"
                size="md"
                placeholder="Email"
            />
             <Button  style={{marginTop:20,width:"90%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center"}} onPress={()=>{
                props.navigation.navigate(ScreensNames.Home.name)
            }}>
                <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>SUBSCRIBE</Text>
            </Button>
            </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Subscriptions;

import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';
import {Colors, Typography,Shadow} from "../../styles";
import{Card} from "react-native-paper";

const BestSellingProducts = () => {
    return (
        <View style={{marginLeft:15,marginTop:20}}>
            <Text style={{color:Colors.PRIMARY,fontSize:Typography.FONT_SIZE_16,fontWeight:Typography.FONT_WEIGHT_REGULAR}}>Best selling products</Text>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator ={false} >
                    <View style={{
                        width:"95%",
                        marginLeft:10}}> 
                        <Image 
                            source={require("../../assets/images/Kabuli_Chana.png")} 
                            style={{width:"100%",borderBottomColor:Colors.TEXT_COLOR+50,
                            borderBottomWidth:1,}} resizeMode={"contain"} >
                        </Image>
                            <Text style={{fontWeight:"500",fontSize:14,color:Colors.TEXT_COLOR,marginTop:10}}>Seasame Oil</Text>
                            <Text style={{fontWeight:"300",fontSize:10,color:Colors.TEXT_COLOR,marginTop:5}}>500 gm</Text>
                            <Text style={{fontWeight:"500",fontSize:14,color:Colors.TEXT_COLOR,marginVertical:5}}>₹ 90.00</Text>
                    </View>
                    <View style={{width:"100%",marginLeft:10}}> 
                        <Image 
                            source={require("../../assets/images/Mustard.png")} 
                            style={{width:"100%",borderBottomColor:Colors.TEXT_COLOR+50,
                            borderBottomWidth:1,}} resizeMode={"contain"} >
                        </Image>
                            <Text style={{fontWeight:"500",fontSize:14,color:Colors.TEXT_COLOR,marginTop:10}}>Mustard Oil</Text>
                            <Text style={{fontWeight:"300",fontSize:10,color:Colors.TEXT_COLOR,marginTop:5}}>500 gm</Text>
                            <Text style={{fontWeight:"500",fontSize:14,color:Colors.TEXT_COLOR,marginVertical:5}}>₹ 90.00</Text>
                    </View>
                </ScrollView>
        </View> 
    )
}

export default BestSellingProducts

const styles = StyleSheet.create({})

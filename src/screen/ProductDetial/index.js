import React from 'react'
import { StyleSheet, Text, FlatList,Image,View, Pressable, SafeAreaView } from 'react-native'
import{Icon,Button, ScrollView,} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors, Typography } from "../../styles";
import{Card} from "react-native-paper";
import ScreensNames from '../../navigations/stack/screenName';
import StarRating from 'react-native-star-rating';
import ProductImageSlider from '../../components/ProductImageSlider';
const ProdcuctDetial = (props) => {
    return (
        <SafeAreaView style={{backgroundColor:Colors.WHITE}}>
        <View style={{flexDirection:"row",borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:25,paddingBottom:10}}>
             <Pressable onPress={()=>{props.navigation.goBack()}}>
             <Icon as={AntDesign} name="left" color={Colors.BLACK} size={4} style={{position:"absolute",left:10,bottom:5}}/>
             </Pressable>
           <Icon as={AntDesign} name="hearto" color={Colors.BLACK} size={5} style={{position:"absolute",right:10,bottom:10}}/>
         </View>
         <View style={{height:"95%"}}>
         <ScrollView>
          <>   
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center"}}>
                <ProductImageSlider/>
                </View>
                <View style={{flexDirection:"row",marginLeft:15}}>
                    <Text style={{fontWeight:"500",fontSize:18,color:Colors.TEXT_COLOR,marginTop:10,marginRight:10}}>Kabuli Chana</Text>
                    <Text style={{fontWeight:"300",fontSize:12,color:Colors.TEXT_COLOR,marginTop:10,alignSelf:"center"}}>500 gm</Text>
                </View>
                <StarRating
                        disabled={false}
                        emptyStar={'star-o'}
                        fullStar={'star'}
                        halfStar={'star-half-empty'}
                        iconSet={'FontAwesome'}
                        starSize={10}
                        containerStyle={{width:"15%",marginLeft:15,marginVertical:10}}
                        maxStars={5}
                        rating={4.5}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={Colors.PRIMARY}
                    />
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center"}}>
                    <View style={{width:"100%",flexDirection:"row"}}>
                        <Text style={{fontWeight:"600",fontSize:16,color:Colors.TEXT_COLOR,marginTop:10,marginLeft:0,width:"55%"}}>₹ 90.00</Text>
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
                    </View>
                    <Text style={{fontWeight:"200",fontSize:10,color:Colors.TEXT_COLOR,marginBottom:40,marginTop:10}}>{`Tax included.\nShipping calculated at checkout.`}
                    </Text>
                </View> 
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:10}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:16,fontWeight:"400",color:Colors.TEXT_COLOR}}>
                        Description
                        </Text>
                        <Icon as={Entypo} name="minus" color={Colors.TEXT_COLOR} size={5} style={{position:"absolute",right:10,top:5}}/>
                    </View> 
                    <Text style={{fontSize:12,fontWeight:"200",lineHeight:17,marginTop:10,width:"93%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>   
                </View>
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:10,paddingBottom:10}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:16,fontWeight:"400",color:Colors.TEXT_COLOR}}>
                        Benefits
                        </Text>
                        <Icon as={Entypo} name="plus" color={Colors.TEXT_COLOR} size={4} style={{position:"absolute",right:10,top:2}}/>
                    </View> 
                </View>       
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:10,paddingBottom:10}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:16,fontWeight:"400",color:Colors.TEXT_COLOR}}>
                        Contents
                        </Text>
                        <Icon as={Entypo} name="plus" color={Colors.TEXT_COLOR} size={4} style={{position:"absolute",right:10,top:2}}/>
                    </View> 
                </View>       
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:10,paddingBottom:10}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:16,fontWeight:"400",color:Colors.TEXT_COLOR}}>
                        Usage
                        </Text>
                        <Icon as={Entypo} name="plus" color={Colors.TEXT_COLOR} size={4} style={{position:"absolute",right:10,top:2}}/>
                    </View> 
                </View>       
                <View style={{borderBottomWidth:.25,width:"92%",borderColor:Colors.GRAY,alignSelf:"center",marginTop:10,paddingBottom:10}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:16,fontWeight:"400",color:Colors.TEXT_COLOR}}>
                        Reviews
                        </Text>
                        <Icon as={Entypo} name="plus" color={Colors.TEXT_COLOR} size={4} style={{position:"absolute",right:10,top:2}}/>
                    </View> 
                </View>  
                <Button  style={{marginTop:20,width:"90%",height:50,borderRadius:10,backgroundColor:Colors.PRIMARY,justifyContent:"center",alignSelf:"center",marginBottom:20}} 
                    onPress={()=>{
                        // props.navigation.navigate(ScreensNames.Home.name)
                    }}>
                        <Text style={{...Typography.FONT_REGULAR,fontSize:Typography.FONT_SIZE_14,color:Colors.WHITE}}>ADD TO BAG</Text>
                    </Button> 
            </>
            </ScrollView>  
            </View>  
         </SafeAreaView>
    )
}

export default ProdcuctDetial

const styles = StyleSheet.create({})

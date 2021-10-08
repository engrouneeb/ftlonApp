import React,{useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View ,Pressable} from 'react-native'
import Ionicons from "react-native-vector-icons/Entypo";
import { Colors, Typography } from "../../styles";
import { Icon,} from "native-base";

const TermCondition = () => {
    const [termsOfServiceAgreement,setTermsOfServiceAgreement] = useState(false);
    const [showProducts,setShowProducts] = useState(false);
    const [showWebsite,setShowWebsite] = useState(false);
    const [showLimitationOfLiability,setShowLimitationOfLiability] = useState(false);
    const [showIndemnification,setShowIndemnification] = useState(false);
    const [showPrivacy,setShowPrivacy] = useState(false);
    const [showAgreementToBeBound,setShowAgreementToBeBound] = useState(false);
    const [showGeneral,setShowGeneral] = useState(false);
    return (
        <ScrollView style={{backgroundColor:Colors.WHITE}}>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>Terms of service agreement</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setTermsOfServiceAgreement(!termsOfServiceAgreement)}>
                                <Icon
                                    as={Ionicons}
                                    name={termsOfServiceAgreement?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:termsOfServiceAgreement?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>I. Products</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowProducts(!showProducts)}>
                                <Icon
                                    as={Ionicons}
                                    name={showProducts?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showProducts?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>II. Website</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowWebsite(!showWebsite)}>
                                <Icon
                                    as={Ionicons}
                                    name={showWebsite?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showWebsite?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>IV. Limitation of liability</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowLimitationOfLiability(!showLimitationOfLiability)}>
                                <Icon
                                    as={Ionicons}
                                    name={showLimitationOfLiability?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showLimitationOfLiability?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>V. Indemnification</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowIndemnification(!showIndemnification)}>
                                <Icon
                                    as={Ionicons}
                                    name={showIndemnification?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showIndemnification?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>VI. Privacy</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowPrivacy(!showPrivacy)}>
                                <Icon
                                    as={Ionicons}
                                    name={showPrivacy?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showPrivacy?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>VII. Agreement to be bound</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowAgreementToBeBound(!showAgreementToBeBound)}>
                                <Icon
                                    as={Ionicons}
                                    name={showAgreementToBeBound?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showAgreementToBeBound?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            <View style={{marginTop:20,marginLeft:0,paddingBottom:20,borderBottomWidth:.25,borderColor:Colors .GRAY,width:"94%",alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                            <Text style={styles.mainHeading}>VIII. General</Text>
                            <Pressable style={styles.iconStyle} onPress={()=> setShowGeneral(!showGeneral)}>
                                <Icon
                                    as={Ionicons}
                                    name={showGeneral?"minus":"plus"}
                                    size={5}
                                    />
                            </Pressable>        
                    </View> 
                    <View style={{display:showGeneral?"flex":"none"}}>
                        <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                    </View>
            </View>
            
        </ScrollView>
            
    )
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
      mainHeading:{
        fontWeight:"400",fontSize:15,color:"#314626"
      },
      mainParagraph:{
        marginTop:20,
        marginLeft:10,
        lineHeight:25,
        fontWeight:"300",
        width:"90%",
        fontSize:14
      },
      heading:{
        marginLeft:10,
        lineHeight:25,
        fontWeight:"400",
        width:"90%",
        color:Colors.GRAY,
        fontSize:15
      },
      normalText:{
        marginTop:10, 
        marginLeft:10,
        lineHeight:25,
        fontWeight:"300",
        width:"90%",
        fontSize:14
      },
      iconStyle:{
        position:"absolute",
        right:10,
      }
})
export default TermCondition;

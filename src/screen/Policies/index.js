import React,{useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View ,Pressable} from 'react-native'
import Ionicons from "react-native-vector-icons/Entypo";
import { Colors, Typography } from "../../styles";
import { Icon,} from "native-base";
const Plicies = () => {
    const [showDetialPrivacyPolicy,setShowDetialPrivacyPolicy] = useState(false);
    const [showReturnAndRefund,setshowReturnAndRefund] = useState(false);
    const [showShippingPolicy,setshowShippingPolicy] = useState(false);
    return (
        <ScrollView style={{backgroundColor:Colors.WHITE}}>
            <View style={styles.mainViewStyle}>
                <View style={{flexDirection:"row"}}>
                        <Text style={styles.mainHeading}>Shipping Policies</Text>
                        <Pressable style={styles.iconStyle} onPress={()=> setshowShippingPolicy(!showShippingPolicy)}>
                            <Icon
                                as={Ionicons}
                                name={showShippingPolicy?"minus":"plus"}
                                size={5}
                                />
                        </Pressable>        
                </View> 
                <View style={{display:showShippingPolicy?"flex":"none"}}>
                    <Text style={styles.mainParagraph}>Once we receive the order, before delivery we will call and confirm the delivery location and time. We do free delivery across Bangalore and Mysore as per the scheduled policy from our fulfillment center which is located in Pandavapura, Mandya. The minimum order value should be Rs. 500 Products will be packaged based on the type of items (Fruits & Vegetables, Grocery, Oils/Ghee, and Dairy Products). We are also practicing zero waste packaging for online delivery with the help of cotton cloth bags and glass jars and we return those bags and glass jars after delivering to the customer. This is our Innovative step to make eco-friendly Bangalore and Mysore with the help of our FTLON customers.</Text>
                </View>
            </View>
            <View style={styles.mainViewStyle}>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.mainHeading}>Returns & Refunds</Text>
                    <Pressable style={styles.iconStyle} onPress={()=> setshowReturnAndRefund(!showReturnAndRefund)}>
                        <Icon
                            as={Ionicons}
                            name={showReturnAndRefund?"minus":"plus"}
                            size={5}
                            />
                    </Pressable>        
                </View>
                <View style={{display:showReturnAndRefund?"flex":"none"}}>
                    <Text style={styles.mainParagraph}>For the convenience of our customers, we follow an ‘Easy Return Policy’ at FTLON. If you would like to return an item(s) from your order on account of it being damaged or incorrect, please do the following:</Text> 
                    <Text style={styles.mainParagraph}>.You can reach out to our Customer Care on <Text style={{fontWeight:"bold"}}>info@ftlon.in</Text> or on <Text style={{fontWeight:"bold"}}>+91 8431542977</Text> and we will resolve this issue at the earliest. Please detail your concern along with your order number.</Text> 
                    <Text style={styles.mainParagraph}>.Please send a photo of the damaged/incorrect item along with your email or WhatsApp the same on +91 8431542977 along with your order number.</Text>
                    <Text style={styles.mainParagraph}>.We will get back to you within <Text style={{fontWeight:"bold"}}>2 working days</Text> on the return.</Text>
                    <Text style={{...styles.mainHeading,marginLeft:10,fontWeight:"400"}}>What products can be returned and when?</Text>
                    <Text style={{...styles.normalText,fontWeight:"400"}}>You can return your product(s) when you:</Text>
                    <View style={{marginLeft:5}}>
                    <Text style={styles.normalText}>1. Are not happy with the quality of the product</Text>
                    <Text style={styles.normalText}>
                        2. Receive a product that’s different than what you ordered
                    </Text>
                    <Text style={styles.normalText}>3. Receive a product that looks different from how it appeared on the product page</Text>
                    <Text style={styles.normalText}>4. If the product does not fit well (size issues)</Text>
                    <Text style={styles.normalText}>5. Please note the return time for fresh items such as milk, vegetables, fruits is 24 hours, while for non-fresh items like dal, rice, cleaners etc it is 7 days.</Text>
                    </View>
                    <Text style={styles.normalText}>What is the Refund Policy at FTLON?</Text>
                    <Text style={styles.normalText}>If you would like a refund for any item(s) in your order, please reach out to our Customer Care on info@ftlon.in or on <Text style={{fontWeight:"bold"}}>+91 8431542977</Text> and we will resolve this issue at the earliest. Please detail your concern along with your order number and send a photo of the items(s) you would like to initiate a refund for.</Text>
                    <Text style={styles.normalText}>Please note that the refund for online payments will be made into the online account that has been used for the transaction (PayTM, Netbanking etc) and as per the phone number used to make the transaction. Please contact PayTM/your Bank Customer Care in case of any discrepancy/delay in receiving your refund.</Text>
                    <Text style={styles.normalText}>If you have opted for Cash On Delivery and have opted for a refund, we will issue you a credit note for the refund amount which you can use against future Cash On Delivery orders placed at FTLON.</Text>
                    <Text style={styles.normalText}>Please allow us<Text style={{fontWeight:"bold"}}> 7 working days</Text> to get back to you on your refund request.</Text>
                </View>
      </View>
            <View style={styles.mainViewStyle}>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.mainHeading}>Privacy Policy</Text>
                        <Pressable style={styles.iconStyle} onPress={()=> setShowDetialPrivacyPolicy(!showDetialPrivacyPolicy)}>
                            <Icon
                            as={Ionicons}
                            name={showDetialPrivacyPolicy? "minus":"plus"}
                            size={5}
                            />
                        </Pressable>    
                </View>
                <View style={{display:showDetialPrivacyPolicy?"flex":"none"}}>
                    <Text style={styles.normalText}><Text style={{fontWeight:"bold"}}>ftlon.in</Text> recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on https://ftlon.in and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>ftlon.in</Text> is a property of FTLON India Pvt Ltd Private Limited, an Indian Company registered under the Companies Act, 2013 having its registered office at Pandavapura, Mandya 571435 Karnataka</Text>
                    <Text style={styles.heading}>Information We Collect
                    </Text>      
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>       
                    Contact information.</Text> We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and ip address.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>Payment and billing information.</Text> We might collect your billing name, billing address and payment method when you shop with us. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>Information you post.</Text> We collect information you post in a public space on our website or on a third-party social media site belonging to ftlon.in</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>Demographic information.</Text> 
                    We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>Other information.</Text> If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.     
                    </Text>
                    <Text style={styles.heading}>We Collect Information in Different Ways
                    </Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We collect information directly from you.</Text> 
                    We collect information directly from you when you register on our website. We also collect information if you post a comment on our websites or ask us a question through phone or email.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We collect information from you passively.</Text> 
                    We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We get information about you from third parties.</Text> 
                    For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</Text>
                    <Text style={styles.heading}>Use of Your Personal Information
                    </Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We use information to contact you:</Text> We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes.</Text> 
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We use information to respond to your requests or questions.</Text>
                    We might use your information to confirm your registration for an event or contest.</Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We use information to improve our products and services.</Text>
                    We might use your information to customize your experience with us. This could include displaying content based upon your preferences.</Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We use information to look at site trends and customer interests.</Text> We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.</Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}> We use information for security purposes.</Text>
                    We may use information to protect our company, our customers, or our websites.</Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We use information for marketing purposes.</Text> 
                    We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you register with us we'll enroll you in our newsletter.</Text>
                    <Text style={styles.normalText}>
                    <Text style={{fontWeight:"bold"}}>We use information to send you transactional communications.</Text>
                    We might send you emails or SMS about your account or a purchase.</Text>
                    <Text style={styles.normalText}>We use information as otherwise permitted by law.</Text>
                    <Text style={styles.heading}>Sharing of Information with Third-Parties</Text>
                    <Text style={styles.normalText}><Text style={styles.bold}>We will share information with third parties who perform services on our behalf.</Text> We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India.</Text>
                    <Text style={styles.normalText}><Text style={styles.bold}>We may share information if we think we have to in order to comply with the law or to protect ourselves.</Text> We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.</Text>
                    <Text style={styles.normalText}><Text style={styles.bold}>We may share information with any successor to all or part of our business.</Text> For example, if part of our business is sold we may give our customer list as part of that transaction.</Text>
                    <Text style={styles.normalText}><Text style={styles.bold}>We may share your information for reasons not described in this policy.</Text> We will tell you before we do this.</Text>
                    <Text style={styles.normalText}><Text style={{...styles.bold,marginVertical:20}}>Email Opt-Out</Text> You can opt out of receiving our marketing emails. To stop receiving our promotional emails, please email<Text style={styles.bold}> hello@ftlon.in.</Text> It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases.</Text>
                    <Text style={{...styles.bold,marginVertical:10}}> Third party sites</Text> 
                    <Text style={styles.normalText}> If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites. If you have any questions about this Policy or other privacy concerns, you can also email us at <Text style={styles.bold}> info@ftlon.in</Text></Text>
                    <Text style={{...styles.heading,marginVertical:10}}>Updates to This Policy</Text>
                    <Text style={styles.normalText}>This Privacy Policy was last updated on 07.14.2021. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.</Text>
                    <Text style={styles.heading}>Jurisdiction</Text>
                    <Text style={{...styles.normalText,marginBottom:20}}>If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.</Text>
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
        fontWeight:"300",fontSize:14,color:"#314626"
      },
      mainViewStyle:{
        marginTop:20,
        marginLeft:0,
        paddingBottom:20,
        borderBottomWidth:.25,
        borderColor:Colors .GRAY,
        width:"90%",
        alignSelf:"center"
      },
      heading:{
        marginTop:10, 
        marginLeft:10,
        lineHeight:25,
        fontWeight:"400",
        width:"90%",
        color:Colors.GRAY,
        fontSize:15
      },
      bold:{
        fontWeight:"bold"
      },
      normalText:{
        marginTop:10, 
        marginLeft:10,
        lineHeight:25,
        fontWeight:"300",
        width:"90%",
        fontSize:14
      },
      mainParagraph:{
        marginTop:20,
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
export default Plicies

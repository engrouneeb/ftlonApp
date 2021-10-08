import { ScrollView } from "native-base";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../styles";
const AboutUs = () => {
  return (
    <ScrollView style={{backgroundColor:Colors.WHITE,paddingBottom:20}}>
      <Text style={{marginVertical:30,marginLeft:10,fontWeight:"600",fontSize:16,color:"#314626"}}>About Us</Text>
      <Text style={{marginTop:10,
        marginLeft:10,
        lineHeight:25,
        fontWeight:"300",
        fontSize:14}}>For The Love of Nature (FTLON) India Private Limited provides organic, eco-friendly, and innovative products sourced directly from farmers, artisans, and certified partners that empower a healthy and sustainable lifestyle Our sub-brands <Text style={{fontWeight:"bold"}}>GATHR</Text> delivers edible line of products, <Text style={{fontWeight:"bold"}}>NURTR</Text> provides various artifacts one would need within their gardens and <Text style={{fontWeight:"bold"}}>ELIXR</Text> caters to body and home care products. All products are locally sourced and organically grown.</Text>
    <Text style={{marginVertical:30,marginLeft:10,fontWeight:"600",fontSize:16,color:"#314626"}}>Mission</Text>
    <Text style={{
        marginLeft:10,
        lineHeight:25,
        fontWeight:"300",
        fontSize:14}}>We believe that access to organic and eco-friendly products that positively benefit people to live a sustainable lifestyle is a basic human right. Our goal is to reshape the consumer product landscape, redefine what a truly good product looks like, and make organic and eco-friendly products more accessible, affordable, and convenient for all.</Text>
    <Text style={{marginVertical:30,marginLeft:10,fontWeight:"600",fontSize:16,color:"#314626"}}>Values</Text>
    <Text style={{
        marginLeft:10,
        marginBottom:10,
        lineHeight:25,
        fontWeight:"300",
        fontSize:14}}><Text style={{fontWeight:"bold"}}>Honesty</Text> is at the heart of everything we do. We hope to be positive <Text style={{fontWeight:"bold"}}>Change Agents</Text> towards building a more sustainable ecosystem. We wish to create more <Text style={{fontWeight:"bold"}}>Transparency</Text> for every stakeholder. We will strive to create a robust <Text style={{fontWeight:"bold"}}>community</Text> that works for everyone.</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default AboutUs;

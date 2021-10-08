import React from 'react'
import { StyleSheet, Text, View ,Image, Pressable, Linking} from 'react-native'
import { Colors } from '../../styles'

const DATA = [
    {name:"Instagram",
    icon:require('../../assets/images/instagram.png'),
    address:"https://www.instagram.com/"},
    {name:"Facebook",
    icon:require('../../assets/images/facebook.png'),
    address:"https://en-gb.facebook.com/"},

    {name:"Twitter",
    icon:require('../../assets/images/twitter.png'),
    address:"https://twitter.com/?lang=en"},
    {name:"Pinterest",
    icon:require('../../assets/images/pinterest.png'),
    address:"https://www.pinterest.com/"}
]

const FollowOurJourney = () => {
    return (
        <View style={{flex:1,backgroundColor:Colors.WHITE}}>
        {DATA.map((obj)=>{
            return(
            <View style={styles.center}>
                <Pressable style={{flexDirection:"row"}} onPress={()=>{Linking.openURL(obj.address)}}>
                    <Image 
                        source={obj.icon} 
                        style={{height:40,width:40,marginHorizontal:5}} resizeMode={"contain"}  >
                      </Image>
                    <Text style={styles.text}>{obj.name}</Text>
                </Pressable>    
            </View>)
        })}    
        
        </View>
    )
}
const styles = StyleSheet.create({
    center: {
        justifyContent: "flex-start",
        marginLeft:30,
        marginTop:50,flexDirection:"row"
      },
      text:{
          fontWeight:"300",
          fontSize:16,
          alignSelf:"center",
          marginLeft:10
      }
})
export default FollowOurJourney


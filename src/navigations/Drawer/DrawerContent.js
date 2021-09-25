import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Title,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ScreensNames from '../stack/screenName';
import { Colors } from '../../styles';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <View style={{ flexDirection:'column',width:"93%"}}>
                                <Title style={{...styles.title,color:Colors.PRIMARY}}>Sign In / Create account</Title>
                                <View style={{borderBottomColor:Colors.BORDER_COLOR,borderWidth:.25}}/>
                            </View>
                        </View>
                        <Title style={{fontSize:16,marginTop:20}}>MY ACCOUNT</Title>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5 
                                name="receipt" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Order"
                            onPress={() => {props.navigation.navigate(ScreensNames.Order.name)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Entypo 
                                name="medal" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Rewards"
                            onPress={() => {props.navigation.navigate(ScreensNames.Rewards.name)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="mail-open-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Subscriptions"
                            onPress={() => {props.navigation.navigate(ScreensNames.Subscription.name)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign 
                                name="hearto" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Wishlist"
                            onPress={() => {props.navigation.navigate(ScreensNames.WishList.name)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Fontisto 
                                name="spinner-refresh" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Buy Again"
                            onPress={() => {props.navigation.navigate(ScreensNames.BuyAgain.name)}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="FTLON">
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                name="info" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About Us"
                            onPress={() => {props.navigation.navigate(ScreensNames.AboutUs.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="ios-hand-left-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Say Hello"
                            onPress={() => {props.navigation.navigate(ScreensNames.SayHello.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5 
                                name="store" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Visit Store"
                            onPress={() => {props.navigation.navigate(ScreensNames.VisitStore.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="eye-plus" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Follow Our Journey"
                            onPress={() => {props.navigation.navigate(ScreensNames.FollowOurJourney.name)}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="MORE">
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="shield-checkmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Policies"
                            onPress={() => {props.navigation.navigate(ScreensNames.Policies.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="book-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Term And Conditions"
                            onPress={() => {props.navigation.navigate(ScreensNames.TermCondition.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign 
                                name="clockcircleo" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Delivery Schedule"
                            onPress={() => {props.navigation.navigate(ScreensNames.DeliverySchedule.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign 
                                name="setting" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate(ScreensNames.Settings.name)}}
                        />
                    <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="logout" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Logout"
                            onPress={() => {props.navigation.navigate("Logout")}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
  
    drawerSection: {
      marginTop: 15,
    },

  });
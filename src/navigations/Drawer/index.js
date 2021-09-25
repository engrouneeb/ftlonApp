import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import  Orders from "../../screen/Order";
import  Rewards from "../../screen/Rewards";
import  Subscriptions from "../../screen/Subscriptions";
import  Wishlist from "../../screen/Wishlist";
import  BuyAgain from "../../screen/BuyAgain";
import  AboutUs from "../../screen/AboutUs";
import  SayHello from "../../screen/SayHello";
import  VisitStore from "../../screen/VisitStore";
import  FollowOurJourney from "../../screen/FollowOurJourney";
import  Policies from "../../screen/Policies";
import  TermCondition from "../../screen/TermAndConditions";
import  DeliverySchedule from "../../screen/DeliverySchedule";
import  Settings from "../../screen/Settings";
import  Logout from "../../screen/Logout";
import {DrawerContent} from "./DrawerContent"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Rewards" component={Rewards}  />
      <Drawer.Screen name="Subscriptions" component={Subscriptions}  />
      <Drawer.Screen name="Wishlist" component={Wishlist} options={{
          title: 'Wish list'}}  />
      <Drawer.Screen name="BuyAgain" component={BuyAgain}  options={{
          title: 'Buy Again'}} />
      <Drawer.Screen name="AboutUs" component={AboutUs} options={{
          title: 'About Us'}} />
      <Drawer.Screen name="SayHello" component={SayHello} options={{
          title: 'Say Hello'}} />
      <Drawer.Screen name="VisitStore" component={VisitStore} options={{
          title: 'Visit Store'}} />
      <Drawer.Screen name="FollowOurJourney" component={FollowOurJourney} options={{
          title: 'Follow Our Journey'}}/>
      <Drawer.Screen name="Policies" component={Policies}  />
      <Drawer.Screen name="TermCondition" component={TermCondition} options={{
          title: 'Term And Conditions'}} />
      <Drawer.Screen name="DeliverySchedule" component={DeliverySchedule} options={{
          title: 'Delivery Schedule'}}   />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
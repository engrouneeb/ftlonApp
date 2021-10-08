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

import Ionicons from "react-native-vector-icons/Ionicons";

import { Icon, ScrollView } from "native-base";

import { Colors, Typography } from "../../styles";

 

const Rewards = () => {

  return (

    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>

     

      <View

          style={{

            borderBottomWidth: 0.25,

            width: "92%",

            borderColor: Colors.GRAY,

            alignSelf: "center",

            marginTop: 15,

            paddingBottom: 15,

          }}

        >

          <Pressable>

            <View

              style={{

                flexDirection: "row",

                justifyContent: "space-between",

              }}

            >

              <Text

                style={{

                  fontWeight: "300",

                  color: Colors.PRIMARY_DARK,

                  fontSize: Typography.FONT_SIZE_12,

                  marginBottom: 5,



                }}

              >

                Your Rewards

              </Text>

              <Icon

                as={AntDesign}

                name="right"

                size={4}

                style={{

                  fontWeight: "bold",

                }}

              />

            </View>

          </Pressable>

        </View>

     

        <View

          style={{

            borderBottomWidth: 0.25,

            width: "92%",

            borderColor: Colors.GRAY,

            alignSelf: "center",

            marginTop: 15,

            paddingBottom: 15,

          }}

        >

            <View

 

              style={{

                flexDirection: "row",

                justifyContent: "space-between",

                marginBottom: 15,

 

              }}

            >

              <Text

                style={{

                  fontWeight: Typography.FONT_WEIGHT_BOLD,

                  color: Colors.BLACK,

                  fontSize: Typography.FONT_SIZE_14,

                  marginBottom: 5,

                  textTransform: "uppercase",

                }}

              >

                0 POINTS

              </Text>

              <Icon

                as={Entypo}

                name="back-in-time"

                size={5}

                style={{

                  fontWeight: "bold",

                  color: Colors.BORDER_COLOR,

 

                }}

              />

            </View>

      

            <View

              style={{

                marginTop: 15,

              }}

            >

              <Text

                style={{

                  fontWeight: Typography.FONT_WEIGHT_BOLD,

                  color: Colors.BORDER_COLOR,

                  fontSize: Typography.FONT_SIZE_12,

                  marginBottom: 5,

                  textTransform: "uppercase",

                }}

              >

                Next rewards

              </Text>

             

            </View>

      

        </View>

        <View

          style={{

            borderBottomWidth: 0.25,

            width: "92%",

            borderColor: Colors.GRAY,

            alignSelf: "center",

            marginTop: 15,

            paddingBottom: 15,

          }}

        >

          <Pressable>

            <View

              style={{

                flexDirection: "row",

                justifyContent: "space-between",

              }}

            >

            <View style={{

              flexDirection:'row'

            }}>

            <Icon

                as={Ionicons}

                name="cash-outline"

                size={5}

                style={{

                  fontWeight: "bold",

                }}

              />

              <Text

                style={{

                  fontWeight: Typography.FONT_WEIGHT_BOLD,

                  color: Colors.BLACK,

                  fontSize: Typography.FONT_SIZE_14,

                  marginBottom: 5,

                  paddingLeft:10,

                  // textTransform: "uppercase",

                }}

              >

                Oder discount

              </Text>

              </View>

              <View>

              <Text>100 Points = ₹1</Text>

              </View>

            </View>

          </Pressable>

        </View>

     

        <View

          style={{

            borderBottomWidth: 0.25,

            width: "92%",

            borderColor: Colors.GRAY,

            alignSelf: "center",

            marginTop: 15,

            paddingBottom: 15,

          }}

        >

          <Pressable>

            <View

              style={{

                flexDirection: "row",

                justifyContent: "space-between",

              }}

            >

            <View style={{

              flexDirection:'row'

            }}>

            <Icon

                as={Feather}

                name="gift"

                size={5}

                style={{

                  fontWeight: "bold",

                }}

              />

              <Text

                style={{

                  fontWeight: Typography.FONT_WEIGHT_BOLD,

                  color: Colors.BLACK,

                  fontSize: Typography.FONT_SIZE_14,

                  marginBottom: 5,

                  paddingLeft:10,

                  // textTransform: "uppercase",

                }}

              >

                Ways to earn

              </Text>

              </View>

              <Icon

                as={AntDesign}

                name="right"

                size={4}

                style={{

                  fontWeight: "bold",

                }}

              />

            </View>

          </Pressable>

        </View>

     

        <View

          style={{

            borderBottomWidth: 0.25,

            width: "92%",

            borderColor: Colors.GRAY,

            alignSelf: "center",

            marginTop: 15,

            paddingBottom: 15,

          }}

        >

          <Pressable>

            <View

              style={{

                flexDirection: "row",

                justifyContent: "space-between",

              }}

            >

            <View style={{

              flexDirection:'row'

            }}>

            <Icon

                as={MaterialIcons}

                name="redeem"

                size={5}

                style={{

                  fontWeight: "bold",

                }}

              />

              <Text

                style={{

                  fontWeight: Typography.FONT_WEIGHT_BOLD,

                  color: Colors.BLACK,

                  fontSize: Typography.FONT_SIZE_14,

                  marginBottom: 5,

                  paddingLeft:10,

                  // textTransform: "uppercase",

                }}

              >

                Ways to redeem

              </Text>

              </View>

              <Icon

                as={AntDesign}

                name="right"

                size={4}

                style={{

                  fontWeight: "bold",

                }}

              />

            </View>

          </Pressable>

        </View>

     

       

      

    </SafeAreaView>

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

export default Rewards;
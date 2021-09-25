import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

  const Account =()=>{
    return (
        <View style={styles.center}>
            <Text>Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });
export default Account;
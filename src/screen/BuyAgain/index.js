import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BuyAgain = () => {
    return (
        <View style={styles.center}>
            <Text>Buy Again Screen</Text>
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
})
export default BuyAgain

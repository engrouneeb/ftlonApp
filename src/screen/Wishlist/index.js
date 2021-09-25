import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Wislist = () => {
    return (
        <View style={styles.center}>
            <Text>Wish list Screen</Text>
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
export default Wislist



import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Plicies = () => {
    return (
        <View style={styles.center}>
            <Text>Plicies screen</Text>
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
export default Plicies

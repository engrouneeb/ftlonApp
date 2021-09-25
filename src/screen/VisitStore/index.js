import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const VisitStore = () => {
    return (
        <View style={styles.center}>
            <Text> VisitStore Screen</Text>
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
export default VisitStore


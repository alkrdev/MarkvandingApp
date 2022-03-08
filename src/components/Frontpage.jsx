import React from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert, Grid } from "react-native"
import Constants from "expo-constants"
import mark from "../images/mark.png"

const Frontpage = () => {

    return (
        <View style={styles.container}>
            <Text>HELLO FROM FRONTPAGE</Text>
            <Image source={mark} style={styles.mark} />

        </View>
    )
}

const styles = StyleSheet.create({
    text: {

    },
    mark: {
        maxHeight: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
});

export default Frontpage
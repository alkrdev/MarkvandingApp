import React from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert } from "react-native"
import Constants from "expo-constants"

const Start = () => {

    return (
        <View style={styles.container}>
            <Text>HELLO FROM START</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
});

export default Start
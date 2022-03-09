import React from "react"
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const Header = (props) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Frontpage', {})}>
                <Text style={styles.title}>
                    Forside
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('List', {})}>
                <Text style={styles.title}>
                    Liste
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Start', {})}>
                <Text style={styles.title}>
                    Start vander
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: width,
        height: height / 10,
        bottom: 0,
        backgroundColor: '#069420',

        borderBottomColor: 'black',
        borderBottomWidth: 4
    },
    menu: {
        height: height / 11,
        width: 60,
        position: 'absolute',
        left: 25
    },
    title: {
        textAlign: "center",
        fontSize: 32,
    },
    profile: {
        height: height / 11,
        width: 60,
        marginRight: 25
    }
})

export default Header;
import React from "react"
import { Text, View, StyleSheet, Platform, Button, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert, TextInput } from "react-native"
import Constants from "expo-constants"
import CheckBox from 'expo-checkbox';
import Header from "./Header"

import field from "./../images/mark.png"
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Start = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={{ fontSize: 45 }}>Start Vander</Text>

                <Text>Navn på vander</Text>

                <TextInput style={{ borderWidth: 1, borderStyle: "solid" }}></TextInput>

                <Image source={field} style={{ height: 300 }}></Image>

                <Button title="Brug nuværende lokation"></Button>

                <View style={{ display: "flex", flexDirection: "row" }}>
                    <CheckBox style={{ marginRight: 5 }}></CheckBox>
                    <Text style={styles.label}>Hydrant Åben</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <CheckBox style={{ marginRight: 5 }}></CheckBox>
                    <Text style={styles.label}>Maskine er sat i gear</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <CheckBox style={{ marginRight: 5 }}></CheckBox>
                    <Text style={styles.label}>Slange korrekt placeret</Text>
                </View>
                <Button title="Start Vander"></Button>

            </View>
            <Header title={"Start"} navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    label: {

    },
    form: {
        height: height * 0.85,
        display: "flex", 
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 25
    }

});

export default Start
import React from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, TextInput, Button, Image, Alert } from "react-native"
import Constants from "expo-constants"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Time = (props) => {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 60}}>Indtast tid for Vander 5</Text>
            <View>
                <Text>Tid Tilbage</Text>

                <TextInput style={{ borderWidth: 1, borderStyle: "solid" }}></TextInput>
                <Text>Færdig kl.</Text>

                <TextInput style={{ borderWidth: 1, borderStyle: "solid" }}></TextInput>
            </View>
            <Button title="GEM" onPress={() => { props.navigation.navigate('Frontpage', {})}}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        margin: 15,
        justifyContent: "space-around",        
        height: height,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
});

export default Time
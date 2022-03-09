import React from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert, Grid } from "react-native"
import Constants from "expo-constants"

import droplet from "./../images/droplet.png"
import mark from "./../images/mark.png"

import Header from "./Header"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Frontpage = (props) => {

    return (
        <View style={styles.container}>                    
            <Image source={mark} style={styles.mark} />
            <TouchableOpacity style={styles.machine1} onPress={() => props.navigation.navigate('List', {})} >
                <Image style={{ height: 50, width: 50 }} source={droplet} />
            </TouchableOpacity>      
            
            <TouchableOpacity style={styles.machine2} onPress={() => props.navigation.navigate('List', {})} >
                <Image style={{ height: 50, width: 50 }} source={droplet} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.machine3} onPress={() => props.navigation.navigate('List', {})} >
                <Image style={{ height: 50, width: 50 }} source={droplet} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.machine4} onPress={() => props.navigation.navigate('List', {})} >
                <Image style={{ height: 50, width: 50 }} source={droplet} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.machine5} onPress={() => props.navigation.navigate('List', {})} >
                <Image style={{ height: 50, width: 50 }} source={droplet} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.maskine6} onPress={() => props.navigation.navigate('List', {})} >
                <Image style={{ height: 50, width: 50 }} source={droplet} />
            </TouchableOpacity>

            <Header title={"Forside"} navigation={props.navigation} />

        </View>

    )
}



const styles = StyleSheet.create({
    mark: {
        width: width,
        height: height / 10 * 9,
        resizeMode: 'cover'
    },
    machine1: {
        position: 'absolute',
        left: 130,
        top: 160
    },
    machine2: {
        position: 'absolute',
        left: 10,
        top: 10
    },
    machine3: {
        position: 'absolute',
        left: 300,
        top: 130
    },
    machine4: {
        position: 'absolute',
        left: 10,
        top: 700
    },
    machine5: {
        position: 'absolute',
        left: 280,
        top: 400
    },
    maskine6: {
        position: 'absolute',
        left: 310,
        top: 280
    },
    droplet: {

    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
});

export default Frontpage
import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert, ScrollView } from "react-native"
import Constants from "expo-constants"

import droplet from "./../images/droplet.png"
import field from "./../images/mark.png"

import Header from "./Header"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const List = (props) => {
    const [machines, setMachines] = useState([])

    useEffect(() => {
        setMachines([
            { name: '1', timeLeft: "1:50" },
            { name: '2', timeLeft: "1:57" },
            { name: '3', timeLeft: "5:40" },
            { name: '4', timeLeft: "6:25" },
            { name: '5', timeLeft: "10:16" },
            { name: '6', timeLeft: "16:56" },
        ])
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>

                    {machines ? machines.map(machine => {
                        return (
                            <View key={machine.name} style={styles.item}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                                    <Image source={field} style={styles.mark} />
                                    <Image source={droplet} style={styles.machine} />
                                </TouchableOpacity>


                                <Text style={{ fontSize: 35 }}>Vander {machine.name}</Text>
                                <Text style={{ fontSize: 35 }}>Tid tilbage: {machine.timeLeft}</Text>
                            </View>
                        )
                    }) : <></>}

            </ScrollView>
            
            <Header navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    machine: {
        position: "absolute",
        top: 140,
        left: 100,
        width: 25,
        height: 25
    },
    item: {
        margin: 25,
        fontSize: 18,
        height: height / 10 * 6,
        alignItems: 'center',
        backgroundColor: '#AAA',
    },
    mark: {
        height: 350,
        width: 200,
        margin: 15,
    }
});

export default List
import React from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert, Grid } from "react-native"
import Constants from "expo-constants"
import Position from "react-native/Libraries/Components/Touchable/Position";

let mark = 'https://i.imgur.com/GFxREZx.png';
let maskine = 'https://icon-library.com/images/water-icon/water-icon-25.jpg';

import Header from "./Header"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Frontpage = (props) => {

    return (
        <View style={styles.container}>
            <View >

                <Image source={mark} style={styles.mark} />



                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                        <Text style={[styles.maskine1, styles.text]}>Vander 1</Text>
                        <Image source={maskine} style={styles.maskine1} />
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                        <Text style={[styles.maskine2, styles.text]}>Vander 2</Text>
                        <Image source={maskine} style={styles.maskine2} />
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                        <Text style={[styles.maskine3, styles.text]}>Vander 3</Text>
                        <Image source={maskine} style={styles.maskine3} />
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                        <Text style={[styles.maskine4, styles.text]}>Vander 4</Text>
                        <Image source={maskine} style={styles.maskine4} />
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                        <Text style={[styles.maskine5, styles.text]}>Vander 5</Text>
                        <Image source={maskine} style={styles.maskine5} />
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                        <Text style={[styles.maskine6, styles.text]}>Vander 6</Text>
                        <Image source={maskine} style={styles.maskine6} />
                    </TouchableOpacity>
                </View>
            </View>

            <Header title={"Forside"} navigation={props.navigation} />

        </View>

    )
}



const styles = StyleSheet.create({
    text: {
        marginTop: -height/30 ,
        fontSize: height/40,
        width: width/5,
        alignItems: 'center',
    },
    mark: {
        width: width,
        position: 'absolute',
        height: height / 10 * 9,
    },
    maskine1: {
        width: width / 10,
        height: width / 10,
        position: 'absolute',
        left: width / 20 * 15,
        top: height / 20 * 4,
    },
    maskine2: {
        width: width / 10,
        height: width / 10,
        position: 'absolute',
        left: width / 20 * 8,
        top: height / 20 * 4,
    },
    maskine3: {
        width: width / 10,
        height: width / 10,
        position: 'absolute',
        left: width / 20 * 0,
        top: height / 20 * 8,
    },
    maskine4: {
        width: width / 10,
        height: width / 10,
        position: 'absolute',
        left: width / 20 * 4,
        top: height / 20 * 16,
    },
    maskine5: {
        width: width / 10,
        height: width / 10,
        position: 'absolute',
        left: width / 20 * 5,
        top: height / 20 * 7,
    },
    maskine6: {
        width: width / 10,
        height: width / 10,
        position: 'absolute',
        left: width / 20 * 9,
        top: height / 20 * 14,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
});

export default Frontpage
import React from "react"
import { Text, View, StyleSheet, Platform, Dimensions, TouchableOpacity, TouchableHighlight, Image, Alert, FlatList } from "react-native"
import Constants from "expo-constants"

let mark = 'https://i.imgur.com/GFxREZx.png';
let maskine = 'https://icon-library.com/images/water-icon/water-icon-25.jpg';

import Header from "./Header"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const List = (props) => {

    return (
        <View style={styles.container}>

            <FlatList style={styles.list}
                data={[
                    { navn: '1', tidTilbage: "1:50" },
                    { navn: '2', tidTilbage: "1:57" },
                    { navn: '3', tidTilbage: "5:40" },
                    { navn: '4', tidTilbage: "6:25" },
                    { navn: '5', tidTilbage: "10:16" },
                    { navn: '6', tidTilbage: "16:56" },
                ]}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View >
                            <TouchableOpacity onPress={() => props.navigation.navigate('List', {})} >
                                <Image source={mark} style={styles.mark} />
                                <Image source={maskine} style={styles.maskine} />
                            </TouchableOpacity>
                        </View>


                        <Text style={styles.textl}>Vander {item.navn}</Text>
                        <Text style={styles.texth}>Tid tilbage: {item.tidTilbage}</Text>
                    </View>
                )
                }
            />

            <Header navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    list: {
        marginBottom: height / 10,
    },
    item: {
        margin: height / 30,
        fontSize: 18,
        height: height / 10 * 4,
        alignItems: 'center',
        backgroundColor: '#AAA',
    },
    mark: {
        height: height / 10 * 3,
        width: width / 10 * 8,
        margin: 15,

        objectFit: 'cover',
    },
    maskine: {
        width: width / 10,
        height: width / 10,
        left: width / 2 - height / 10 - 15,
        top: height / 10 * 3 / 2,
        position: 'absolute',
    },
    textl: {
        position: 'absolute',
        left: width / 10,
        fontSize: width/25,
        bottom: height / 30
    },
    texth: {
        position: 'absolute',
        right: width / 10,
        fontSize: width/25,
        bottom: height / 30
    }
});

export default List
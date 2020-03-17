import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class SpaceScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>You logined already!!</Text>
                <View style={{ height: 50 }}></View>
                <TouchableOpacity
                    style={{ backgroundColor: "green", paddingHorizontal: 20, paddingVertical: 7 }}
                    onPress={() => { Actions.Login() }}
                ><Text>Go back</Text></TouchableOpacity>
            </View>
        );
    }
}

export default SpaceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        alignItems: 'center',
        backgroundColor: 'white'
    },
});

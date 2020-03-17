import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, KeyboardAvoidingView, Alert } from 'react-native'
import PhoneInput from 'react-native-phone-input'
import { Actions } from 'react-native-router-flux'
import firebase from 'react-native-firebase'
import UtilService from '../util'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.phone = null
    }

    login() {

        var phoneNumber = this.phone.getValue()
        firebase.auth().signInWithPhoneNumber(phoneNumber, false)
            .then(confirmResult => {
                console.log("confirmResult on firebase====> ", confirmResult)
                UtilService.saveLocalStringData('_verificationId', confirmResult._verificationId)
                Actions.SpaceScreen()
            })
            .catch(error => {
                console.log("error", error)
                Alert.alert("Error", "Log In failed!")
            })

    }
    renderLogin() {

        return (
            <View style={styles.loginContainer}>
                <View style={[styles.upperPad, { elevation: 7, zIndex: 7 }]}>
                    <View>
                        <Text style={styles.signinLabel}>{'SIGN IN'}</Text>
                        <View style={[styles.grouBox, { width: 200 }]}>
                            <View style={styles.phoneBox}><PhoneInput ref={(ref) => { this.phone = ref }} /></View>
                            <TouchableOpacity onPress={() => { this.login() }} style={styles.signinBtn}>
                                <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold' }}>{'SIGN IN'}</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}></View>
                            </View>
                            <View style={{ height: 10 }}></View>
                        </View>
                    </View>
                </View>
            </View>
        )

    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.keyboardContainer}
                    behavior={'padding'}
                >
                    {this.renderLogin()}
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        alignItems: 'center',
        backgroundColor: "rgb(148, 148, 148)"
    },
    loginContainer: { width: '75%', height: 300, borderRadius: 7, alignItems: 'center', backgroundColor: "white" },
    signinLabel: { fontWeight: 'bold', color: 'grey', fontSize: 24, marginTop: 15 },
    grouBox: { width: "100%", alignItems: 'center', paddingTop: 30, justifyContent: 'center' },
    phoneBox: { borderBottomColor: 'green', width: '100%', borderBottomWidth: 1, paddingBottom: 7 },
    signinBtn: { backgroundColor: "black", marginTop: 40, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 7 },
    keyboardContainer: { flex: 1, width: '100%', height: '100%', paddingTop: 30, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }
});

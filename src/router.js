import React, { PureComponent } from 'react';
import { StyleSheet, Platform, View, AppState } from 'react-native'
import { Router, Scene, Reducer, Tabs, Actions } from 'react-native-router-flux';
import Login from './screens/login'
import SpaceScreen from './screens/spaceScreen'

const stateHandler = (prevState, newState, action) => {

};
const getSceneStyle = () => ({
    shadowOpacity: 1,
    shadowRadius: 3
})
class Root extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {

        this.scenes = Actions.create(
            <Scene key="root" hideNavBar>
                <Scene key="Login" component={Login} />
                <Scene key="SpaceScreen" component={SpaceScreen} />
            </Scene>
        )

        return (
            <View style={{ flex: 1 }}>
                <Router
                    // createReducer={reducerCreate}
                    onStateChange={stateHandler}
                    getSceneStyle={getSceneStyle}
                    //uriPrefix={prefix}
                    hideNavBar
                    scenes={this.scenes}
                >
                </Router>
            </View>

        )
    }
}

export default Root


/* eslint-disable prettier/prettier */
import React from 'react';
import { connect} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../components/screens/Home/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName ="Home">
    <Stack.Screen name = "Home" component ={ Home } />

    </Stack.Navigator>
  );

const AppRouter = ({user, isAuthenticated, error}) => {
    // console.log(user, isAuthenticated, error);
    return (
        <>
        <Tab.Navigator>
        <Tab.Screen name = "Home" component ={ HomeStack} />
        <Tab.Screen name = "Add" component ={ HomeStack} />
        <Tab.Screen name = "Profile" component ={ HomeStack} />
      </Tab.Navigator>
        </>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {})(AppRouter);

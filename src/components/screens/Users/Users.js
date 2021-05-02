/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';

import { View, Text, Button } from 'react-native';

// we can use hooks
import { useNavigation, useRoute } from '@react-navigation/native';
// instead of props.

const User = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.setOptions({
                headerRight: () => <Button
                    title="Do More"
                    onPress={ () => alert("More") } />,
            });
        }, 2000);
    }, [navigation]);
    return (
        <>
            <View>
                {/*<Button
                    title="Go Back"
                    onPress={ () =>
                        navigation.navigate('Home', {
                            active: 'yes',
                        }) } />
                <Button
                    title="chnage Header"
                    onPress={ () => navigation.setOptions({
                        title: 'something else',
                    }) }
                />*/}
                <Text>This is user</Text>
            </View>
        </>
    );
};
export default User;

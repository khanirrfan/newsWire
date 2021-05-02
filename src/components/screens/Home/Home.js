/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
// we can use hooks
import { useNavigation, useRoute } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
            <View>
                {/*<Text>Home</Text>
                <Text>
                {route.params ?
                    route.params.active
                    : null

                }</Text>
                <Button
                    title="Go to users"
                    onPress={() =>
                        navigation.navigate('User', {
                            id: 1,
                        codeName:'Mamba'                        })}/>
                <Button
                    title="Go to hoem settings"
                    onPress={ () =>
                        navigation.navigate('Home_settings') } />

                <Button
                    title="Go to hoem posts"
                    onPress={ () =>
                        navigation.navigate('Home_posts') } />*/}
                        <Text>This is home</Text>
            </View>
    );
};
export default Home;

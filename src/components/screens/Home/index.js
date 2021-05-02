/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
// we can use hooks
import { useNavigation, useRoute } from '@react-navigation/native';
import ArticleScreen from '../Articles/Article/Article';

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View>
            <ArticleScreen />
            <Button
                title="Go To Article"
                onPress ={() => navigation.navigate('Users')}
            />
        </View>
    );
};
export default Home;

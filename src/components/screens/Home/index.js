/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
// we can use hooks
import { useNavigation, useRoute } from '@react-navigation/native';
import ArticleScreen from '../Articles/Article/Article';
import {Color, LogoText } from '../../../utils/tools';
const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View>
            <ArticleScreen />
            <LogoText style={{fontSize:40,textAlign:'center',
            color:Color.black2
        }}/>
            <Button
                title="Go To Article"
                onPress ={() => navigation.navigate('Users')}
            />
        </View>
    );
};
export default Home;

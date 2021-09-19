import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Text, View } from 'react-native'
import movieDB from '../Api/movieDB';
import DetailScreen from './DetailScreen';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [movies, setmovies] = useState([])

    useEffect(() => {
         movieDB.get("/now_playing")
                .then(data => console.log(data.data))
    }, [])

    return (
        <View>
                <Text>HomeScreen</Text>

                <Button title="Navigation" onPress={() => navigation.dispatch(CommonActions.navigate({name:"DetailScreen",}))}/>
        </View>
    )
}

export default HomeScreen

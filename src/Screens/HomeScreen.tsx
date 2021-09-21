import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, Button, Dimensions, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';


import UseMovie from '../Hooks/UseMovie';
import MoviePoster from '../Components/MoviePoster';
import DetailScreen from './DetailScreen';

const {width: windowWidth} = Dimensions.get('window');
const HomeScreen = () => {
    
    //Proteccion del safeArea Iphone;
    const {top} = useSafeAreaInsets()

    const {movies, isLoading} = UseMovie();
    const navigation = useNavigation();



    if(isLoading){
        return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator color="blue" size={100}/>
        </View>

        )
    }
    

    return (
        <View style={{marginTop:top + 20, width: "100%"}}>

            <Carousel
                data= {movies}
                renderItem= {({item}) => <MoviePoster movie={item}/>}
                sliderWidth={windowWidth}
                
                itemWidth={300}

            />

        </View>
    )
}

export default HomeScreen

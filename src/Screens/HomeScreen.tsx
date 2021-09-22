import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';


import UseMovie from '../Hooks/UseMovie';
import MoviePoster from '../Components/MoviePoster';
import DetailScreen from './DetailScreen';
import { Movie } from '../Interfaces/movieInterface';
import MovieHorizontal from '../Components/MovieHorizontal';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {    
    //Proteccion del safeArea Iphone;
    const {top} = useSafeAreaInsets()

    const {nowPlaying,popular, topRated, upcoming, isLoading} = UseMovie();

    
    const navigation = useNavigation();

  


    if(isLoading){
        return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator color="blue" size={100}/>
        </View>

        )
    }
    

    return (
       <ScrollView>
            <View style={{ backgroundColor: "#292929" ,flex: 1}}>
            <Text style={{color:"#f4872c", fontSize: 40, textAlign:'center', letterSpacing: 6}}>CineMark</Text>
                 <View style={{ marginTop:top + 20,width: "100%"}}>
                        <Carousel
                            data= {nowPlaying}
                            renderItem= {({item}) => <MoviePoster movie={item}/>}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                        />
                </View>

                <MovieHorizontal movies={popular} title={"Mas Populares"}/>

                <MovieHorizontal movies={topRated} title={"Top"} />

                <MovieHorizontal movies={upcoming} title={"Proximamente"} />
                
        </View>
       </ScrollView>
    )
}

export default HomeScreen

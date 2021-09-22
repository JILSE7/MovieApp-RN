import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../Interfaces/movieInterface';
import MoviePoster from './MoviePoster';


interface Props {
    title?: string;
    movies: Movie[];
}

const MovieHorizontal = ({title, movies}:Props) => {
    return (
        <View style={{ marginTop: 10,borderWidth: 1, height:(!!title) ? 260:  220}}>
            {
                title &&  <Text style={{color:"#f4872c", fontSize: 20, textAlign:'center'}}><Text style={{fontSize: 40, fontWeight:'bold'}}>! </Text>{title}<Text style={{fontSize:35, fontWeight:'bold'}}> ¡</Text></Text>
            }
        
        <FlatList
        data={movies}
        renderItem= {({item}) => <MoviePoster movie={item} width={140} height={200} padding={6}/>}
        keyExtractor={(item) => item.id.toString() }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}
        />

    </View>
    )
}

export default MovieHorizontal

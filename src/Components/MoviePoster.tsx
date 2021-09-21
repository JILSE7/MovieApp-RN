import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../Interfaces/movieInterface'

interface Props {
    movie: Movie;
}

const MoviePoster = ({movie}: Props) => {

    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    console.log(movie.poster_path);

    return (
        <View style={{
            width: 300,
            height: 420,        
            padding: 10
        }}>
            <View style={{flex: 1, ...styles.imageContainer}}>
                <Image
                source = {{
                    uri: image  
                }}
                style={styles.image}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        borderRadius: 20
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 25,
                    
    }
})

export default MoviePoster

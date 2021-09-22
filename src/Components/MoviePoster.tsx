import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../Interfaces/movieInterface'

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
    padding?: number;
}

const MoviePoster = ({movie, height = 420, width = 300, padding = 10}: Props) => {

    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    

    return (
        <View style={{
            width,
            height,        
            padding: 10
        }}>
            <View style={styles.imageContainer}>
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
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 250,
                    
    }
})

export default MoviePoster

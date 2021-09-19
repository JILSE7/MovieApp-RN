import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params:{
        api_key: "b3e54b38bd2d6864c95321b3bc5cd2d3",
        language: "es-ES"
    }
});


export default movieDB;
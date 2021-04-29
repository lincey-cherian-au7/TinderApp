import axios from 'axios';

const instance = axios.create({
    baseURL:'https://backend4tinderapp.herokuapp.com/'
})

export default instance;
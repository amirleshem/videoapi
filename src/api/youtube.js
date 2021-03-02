import axios from 'axios'

const KEY = "AIzaSyC_11Nf3rSIPZYwIWRUHY7fmApOV_ZTwaI"

export default axios.create (

    {
        //baseURL:'https://www.googleapis.com/discovery/v1/apis/youtube/v3' , <<--a more advanced version
        baseURL:'https://content-youtube.googleapis.com/youtube/v3',
        params: {
            part:'snippet',
            type:'video',
            maxRersults:5,
            key:KEY
        }
    }
);
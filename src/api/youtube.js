import axios from 'axios'


const KEY = 'AIzaSyCtgj5F3Rlq1CU38BpLzcLF_o49WPCuizQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY,
        
    }

})



import axios from 'axios';
import APIKEY from './../api';

const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?`;
const KEY=`appid=${APIKEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},bg&${KEY}`;
    const request=axios.get(url);

    // console.log('Request: ',request);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}

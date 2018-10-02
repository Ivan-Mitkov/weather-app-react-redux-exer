import axios from 'axios';
import APIKEY from './../api';

const ROOT_URL=`https://samples.openweathermap.org/data/2.5/forecast?appid=${APIKEY}`
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},bg`;
    const request=axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}

import axios from 'axios';

export const weather = async (city) => {
    const API_KEY = "0ce1097ce0f77a8295ecd440f624cd01";
    const response =  await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API_KEY}`)
    console.log('tg..api response.data:', response.data)
    console.log('tg..weather_real')
    return response.data; 

}
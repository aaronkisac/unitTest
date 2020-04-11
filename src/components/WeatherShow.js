import React from 'react';
import { useState } from 'react';

function WeatherShow({weather}) {

    let [city, setCity] = useState("");
    let [weatherData, setWeatherData] = useState({ temp: null, humidity: null, desc: null, location: null })
    let [error, setError] = useState(null);


    const onChangeHandler = (e) => {
        const { name, value } = e.target; 
        setCity(value);
        console.log("city:", city)

    }

    const convertToCelcius = (fahrenheit) => {
        return (fahrenheit - 273.15).toFixed(0);
    }

    const callWeatherApi = async (city) => {
        setError(``);

        setTimeout(() => {
            console.log('tg..async deneme1')
        })

        console.log('tg..async deneme2')

        try {
            console.log('city:', city);

            const data = await weather(city);

            console.log('tg..data1:', data);
            setWeatherData({
                temp: convertToCelcius(data.main.temp),
                desc: data.weather[0].main,
                humidity: data.main.humidity,
                location: data.name
            })
        } catch (error) {
            console.log('Api message:', error.message, ' error:', error)
            setError("the city you entered may not be in UK ! error: " + error.message);
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        callWeatherApi(city);
    }

    return (
        <div>
            <h1>my WeatherShow</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="city">Enter </label>
                <label htmlFor="city"> the </label>
                <label htmlFor="city">City:</label>
                <input name="city" type="text" id="city" onChange={onChangeHandler} />
                <button type="submit">Search</button>
                <div>
                    {error ?
                        <h1 style={{ color: "red" }}>Error: {error} </h1>
                        :
                        <div>
                            <h1 className="outLocation">location: {weatherData.location}</h1>
                            <h2 className="outTemp">temp: {weatherData.temp}</h2>
                            <h1>desc: {weatherData.desc}</h1>
                            <h1>humidity: {weatherData.humidity}</h1>
                        </div>
                    }
                </div>
            </form>
        </div>
    );
}

export default WeatherShow;
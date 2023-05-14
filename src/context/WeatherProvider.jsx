/* eslint-disable react/prop-types */
//Dependencies
import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState({});

    const [loading, setLoading] = useState(false);

    const [noAnswer, setNoAnswer] = useState("");

    const [search, setSearch] = useState({
        city: "",
        country: "",
    });

    const dataSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    const getWeather = async (data) => {
        setLoading(true);

        try {
            const { city, country } = data;

            const appId = import.meta.env.VITE_WEATHER_API_KEY;

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&limit=1&appid=${appId}`;

            const dataGet = await axios(url);

            const { lat, lon } = dataGet.data.coord;

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

            const urlWeatherData = await axios(urlWeather);

            setWeatherData(urlWeatherData);
        } catch (error) {
            setWeatherData({})
            setNoAnswer("City not available");
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                search,
                dataSearch,
                getWeather,
                weatherData,
                loading,
                noAnswer,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider };

export default WeatherContext;

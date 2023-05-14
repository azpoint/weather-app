// Components
import Form from "./Form";
import Spinner from "./Spinner";
import WeatherToShow from "./WeatherToShow";

//Hooks
import useWeather from "../hooks/useWeather";

function WeatherApp() {
    const { weatherData, loading, noAnswer } = useWeather();


    return (
        <>
            <main className="dos-columnas">
                <Form />

                { loading ? <Spinner/> :
                weatherData.data?.name ? <WeatherToShow /> : noAnswer ? <p>{noAnswer}</p> : <p>Click get weather</p>}
                
            </main>
        </>
    );
}
export default WeatherApp;

import useWeather from "../hooks/useWeather"

function WeatherToShow() {
    const {weatherData} = useWeather()

    const {name, main} = weatherData.data

    //Kelvin to Celsius
    const kelvin = 273.15

  return (
    <div className="contenedor clima">
        <h2>The Weather in {name}</h2>

        <p>Temperature: {parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
        
        <p>Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>

        <p>Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
        
    </div>
  )
}
export default WeatherToShow
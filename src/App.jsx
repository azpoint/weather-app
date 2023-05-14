//Dependencies


//Context
import { WeatherProvider } from "./context/WeatherProvider"

//Components

import WeatherApp from "./components/WeatherApp"

function App() {

  return (
    <WeatherProvider>

      <header>
        <h1>Weather Search</h1>
      </header>

      <WeatherApp/>

    </WeatherProvider>
  )
}

export default App

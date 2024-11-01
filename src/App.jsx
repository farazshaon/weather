import Header from "./components/Header/Header"
import WeatherBoard from "./components/Weather/WeatherBoard"
import { WeatherProvider } from "./provider"

function App() {


  return (
        <WeatherProvider>
          <div className="grid place-items-center h-screen">
            <Header/>

            <WeatherBoard/>
          </div>
        </WeatherProvider>
  )
}

export default App

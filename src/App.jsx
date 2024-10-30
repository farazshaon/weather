import Header from "./components/Header/Header"
import WeatherBoard from "./components/Weather/WeatherBoard"


function App() {


  return (

        <div className="grid place-items-center h-screen">
          <Header/>

          <WeatherBoard/>
        </div>
   
  )
}

export default App

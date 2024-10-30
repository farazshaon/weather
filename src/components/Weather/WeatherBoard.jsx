import AddToFavourite from "./AddToFavourite"
import WeatherCondition from "./WeatherCondition"
import WeatherHeadLine from "./WeatherHeadLine"
// import {useWeather} from '../../hooks'
// import { WeatherContext } from "../../context"
// import { useContext } from "react"

const WeatherBoard = () => {
	
	// const {weatherData, loading} = useContext(WeatherContext)
	
  return (
    <div>
      <section className="mt-12">
			<div className="container">
				<div
					className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-6">
						{/* {
							loading.state ? (<p>{loading.message}</p>) : 
							(
								<>
									<AddToFavourite/>
									<WeatherHeadLine/>
									<WeatherCondition/>
								</>
							)
						} */}
					
							<AddToFavourite/>
							<WeatherHeadLine/>
							<WeatherCondition/>
					</div>
				</div>
				
			</div>
		</section>
    </div>
  )
}

export default WeatherBoard

import logo from '../../assets/logo.svg'
import Favorite from './Favorite'
import FavouriteListModal from './FavouriteListModal'
import Search from './Search'

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
		<nav className="container mx-auto flex items-center justify-between py-6">
			<a href="./index.html">
				<img className="h-9" src={logo} alt="Weather App" />
			</a>

			<div className="flex items-center gap-4 relative">
			
                <Search/>

                <Favorite/>
				{/* <!-- Modal --> */}
                <FavouriteListModal/>

			</div>
		</nav>
	</header>
  )
}

export default Header

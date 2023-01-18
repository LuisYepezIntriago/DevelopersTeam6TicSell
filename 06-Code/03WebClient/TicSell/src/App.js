import Logo from './assets/logoTicSell.jpg'
import { Articles } from './components/Articles'
import Filter from './components/filter'

function App() {
	return (
		<div className='container'>
			<figure className='logo'>
				<img src={Logo} alt='TicSell icon' />
			</figure>
			<Filter/>
			<Articles/>
		</div>
	)
}

export default App
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import Login from './components/Login'
function App() {
	return (
		<>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to='/'>Главная</Link>
						</li>
						<li>
							<Link to='/contacts'>Контакты</Link>
						</li>
						<li>
							<Link to='/about'>О нас</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/about' element={<About />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Router>
		</>
	)
}

export default App

import { useNavigate } from 'react-router-dom'

function Home() {
	const navigate = useNavigate()
	const handleLogin = () => {
		navigate('/login')
	}
	return (
		<>
			<h1>Главная</h1>
			<button onClick={handleLogin}>Войти</button>
		</>
	)
}
export default Home

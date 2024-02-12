import { Header } from './components/header/Header'
import { HeadLine } from './components/headline/HeadLine'
import './App.scss'
import { About } from './components/about/About'
function App() {
	return (
		<>
			<Header />
			<main>
				<HeadLine />
				<About />
			</main>
		</>
	)
}

export default App

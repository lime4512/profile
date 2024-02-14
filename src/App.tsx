import { Header } from './components/header/Header'
import { HeadLine } from './components/headline/HeadLine'
import './App.scss'
import { About } from './components/about/About'
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Project } from './components/project/Project'
import { Contact } from './components/contact/Contact'
function App() {
	useEffect(() => {
		smoothscroll.polyfill()
	}, [])
	return (
		<>
			<Header />
			<main>
				<HeadLine />
				<About />
				<Project />
				<Contact />
			</main>
		</>
	)
}

export default App

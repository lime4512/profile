import { Header } from './components/header/Header'
import { HeadLine } from './components/headline/HeadLine'
import { About } from './components/about/About'
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Project } from './components/project/Project'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
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
			<Footer />
		</>
	)
}

export default App

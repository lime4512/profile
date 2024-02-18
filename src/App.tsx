import { Header } from './components/header/Header'
import { HeadLine } from './components/headline/HeadLine'
import { About } from './components/about/About'
import { Project } from './components/project/Project'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'

function App() {
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

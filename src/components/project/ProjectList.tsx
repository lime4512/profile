import '../../style/projectList.scss'
import { ProjectCard } from './ProjectCard'
export const ProjectList = () => {
	return (
		<div className='project__container'>
			<div className='project__content'>
				<ProjectCard
					title='CryptoBrain'
					text='CryptoBrain is a crypto application that allows users to view information about various cryptocurrencies and easily buy and sell cryptocurrencies.'
					stack={['React', 'SCSS']}
					img='/projectImg/cryptoBrain.jpg'
					urlCode='https://github.com/lime4512/CryptoBrain'
					order={false}
				/>
				<ProjectCard
					title='CryptoBrain'
					text='CryptoBrain is a crypto application that allows users to view information about various cryptocurrencies and easily buy and sell cryptocurrencies.'
					stack={['React', 'SCSS']}
					img='/projectImg/cryptoBrain.jpg'
					urlCode='https://github.com/lime4512/CryptoBrain'
					order={true}
				/>
				<ProjectCard
					title='CryptoBrain'
					text='CryptoBrain is a crypto application that allows users to view information about various cryptocurrencies and easily buy and sell cryptocurrencies.'
					stack={['React', 'SCSS']}
					img='/projectImg/cryptoBrain.jpg'
					urlCode='https://github.com/lime4512/CryptoBrain'
					order={false}
				/>
				<ProjectCard
					title='CryptoBrain'
					text='CryptoBrain is a crypto application that allows users to view information about various cryptocurrencies and easily buy and sell cryptocurrencies.'
					stack={['React', 'SCSS']}
					img='/projectImg/cryptoBrain.jpg'
					urlCode='https://github.com/lime4512/CryptoBrain'
					order={true}
				/>
			</div>
		</div>
	)
}

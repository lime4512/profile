import '../../style/projectList.scss'
import { ProjectCard } from './ProjectCard'
import { projectData } from '../../data/projectData.ts'
export const ProjectList = () => {
	return (
		<div className='project__container'>
			<div className='project__content'>
				{projectData.map(item => (
					<ProjectCard
						title={item.title}
						text={item.text}
						stack={item.stack}
						img={item.img}
						urlCode={item.urlCode}
						order={item.order}
					/>
				))}
			</div>
		</div>
	)
}

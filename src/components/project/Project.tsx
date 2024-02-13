import '../../style/project.scss'
import { ProjectList } from './ProjectList'

export const Project = () => {
	return (
		<section className='project' id='project'>
			<div className='project__content-text'>
				<h4 className='project__subTitle'>PORTFOLIO</h4>
				<h2 className='project__title'>
					Each project is a unique piece of development
				</h2>
			</div>
			<ProjectList />
		</section>
	)
}

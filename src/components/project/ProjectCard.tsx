import { FunctionComponent } from 'react'
import '../../style/projectCard.scss'
interface Props {
	stack: string[]
	title: string
	text: string
	img: string
	urlCode: string
	order: boolean
}
export const ProjectCard: FunctionComponent<Props> = ({
	stack,
	urlCode,
	title,
	text,
	img,
	order,
}) => {
	return (
		<div className='projectCard'>
			<div className={order ? 'projectCard__img order1' : 'projectCard__img'}>
				<img src={img} alt='' />
			</div>
			<div
				className={
					order ? 'projectCard__content order2' : 'projectCard__content'
				}
			>
				<h3 className='projectCard__title'>{title}</h3>
				<p className='projectCard__text'>{text}</p>
				<ul className='projectCard__stack'>
					{stack.map(item => (
						<li>{item}</li>
					))}
				</ul>

				<a href={urlCode} className='projectCard__url'>
					Code <img src='/github_black_logo_icon_147128.svg' alt='' />
				</a>
			</div>
		</div>
	)
}

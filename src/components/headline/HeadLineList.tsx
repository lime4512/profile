import '../../style/headLineList.scss'
import { linkItem } from '../../data/linkIcon'
export const HeadLineList = () => {
	return (
		<div className='headline__stack'>
			<h3 className='headline__stack-title'>Tech Stack</h3>
			<ul className='headline__stack-list'>
				{linkItem.map(item => (
					<li className='headline__stack-img' key={item.id}>
						<img src={item.src} alt='' />
					</li>
				))}
			</ul>
		</div>
	)
}

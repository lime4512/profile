import '../../style/headline.scss'
import { HeadLineList } from './HeadLineList'
export const HeadLine = () => {
	return (
		<section className='headline'>
			<div className='headline__container'>
				<div className='headline__content'>
					<h1 className='headline__title'>Front-End Developer 👋</h1>
					<p className='headline__text'>
						Hi, I'm Alexander Kruglov. A passionate Front-end developer based in
						Russia.
					</p>
					<div className='headline__social'>
						<a href='#'>
							<img src='/github_black_logo_icon_147128.svg' alt='' />
						</a>
						<a href='#'>
							<img src='/telegram_black_logo_icon_147073.svg' alt='' />
						</a>
					</div>
				</div>
				<div className='headline__total_img'>
					<img className='headline__total_img' src='' alt='' />
				</div>
			</div>
			<HeadLineList />
		</section>
	)
}

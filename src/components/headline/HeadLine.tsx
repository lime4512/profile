import '../../style/headline.scss'
import { useTypewriter } from 'react-simple-typewriter'
import { HeadLineList } from './HeadLineList'
import { useState } from 'react'
import { PreLoading } from '../loading/PreLoading'
export const HeadLine = () => {
	const [isLoading, isSetLoading] = useState(true)
	const handleImage = ()=>{
		isSetLoading(false)
	}
	const [typeEffect] = useTypewriter({
		words: [
			`Hi, I'm Alexander Kruglov. A passionate Front-end developer based in Russia.`,
		],
		typeSpeed: 100,
	})
	return (
		<section className='headline' id='home'>
			<div className='headline__main'>
				<div className='headline__container'>
					<div className='headline__content'>
						<h1 className='headline__title'>Front-End Developer 👋</h1>
						<p className='headline__text'>{typeEffect}</p>
						<div className='headline__social'>
							<a href='https://github.com/lime4512'>
								<img src='./github_black_logo_icon_147128.svg' alt='' />
							</a>
							<a href='https://t.me/lime4512'>
								<img src='./telegram_black_logo_icon_147073.svg' alt='' />
							</a>
						</div>
					</div>
					<div className='headline__total_img'>
						{isLoading ? (
							<PreLoading />
						) : (
							<img
								className='headline__total_img'
								src='/profile/face-Alexander.jpg'
								alt='face'
								onLoad={handleImage}
							/>
						)}
					</div>
				</div>
				<HeadLineList />
			</div>
		</section>
	)
}

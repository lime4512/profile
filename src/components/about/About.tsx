import '../../style/about.scss'

export const About = () => {
	return (
		<section className='about'>
			<div className='about__main'>
				<img
					className='about__img'
					src='/public/stock-photo-laptop.jpg'
					alt='laptop'
				/>

				<div className='about__content'>
					<h4 className='about__subTitle'>ABOUT ME</h4>
					<h2 className='about__title'>
						A dedicated Front-end developer based in Russia
					</h2>
					<p className='about-text'>
						As a Junior Front-End Developer, I possess an impressive arsenal of
						skills in HTML, CSS, JavaScript, TypeScript, React, Next, MobX, and
						SCSS, I excel in designing and maintaining responsive websites thot
						affer a smooth user experience. My expertise lies in crafting
						dynamic, engaging interfaces through writing clean and optimized
						code and utilizing cutting-edge development tools and techniques, I
						am also a team player who thrives in collaborating with
						cross-functional teams to produce outstanding web applications.
					</p>
				</div>
			</div>
		</section>
	)
}

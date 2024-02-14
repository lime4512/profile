import '../../style/footer.scss'

export const Footer = () => {
	return (
		<footer>
			<div className='footer__content'>
				<h2 className='footer__title'>Alex.dev</h2>
				<div className='footer__contact'>
					<p className='footer__tel'>+7 978 272 06 83</p>
					<ul className='footer__list'>
						<li>
							<a href='https://t.me/lime4512'>
								<img src='/telegram-white.png' alt='' />
							</a>
						</li>
						<li>
							<a href='https://github.com/lime4512'>
								<img src='/github-white.png' alt='' />
							</a>
						</li>
						<li>
							<a href='https://vk.com/lime4512'>
								<img src='/vk-white.png' alt='' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

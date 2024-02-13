import '../../style/header.scss'
export const Header = () => {
	return (
		<header>
			<div className='header__main'>
				<h2 className='header__logo'>Alex.dev</h2>
				<ul className='header__list'>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#project'>Project</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</header>
	)
}

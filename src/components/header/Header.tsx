import '../../style/header.scss'
export const Header = () => {
	return (
		<header>
			<h2 className='header__logo'>Alex.dev</h2>
			<ul className='header__list'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Project</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</header>
	)
}

import '../../style/contact.scss'
import { ContactCard } from './ContactCard'
export const Contact = () => {
	return (
		<section className='contact' id='contact'>
			<div className='contact__content-text'>
				<h4 className='contact__subTitle'>CONTACT</h4>
				<h2 className='contact__title'>Get In Touch</h2>
			</div>
			<div className='contact__content__list'>
				<ContactCard
					title='Mail'
					name='lime451212@gmail.com'
					img='/mail.svg'
					copyName='lime451212@gmail.com'
					copy={true}
				/>
				<ContactCard
					title='Telegram'
					name='@lime4512'
					img='/telegram.png'
					copyName='https://t.me/lime4512'
					copy={true}
				/>
				<ContactCard
					title='Location'
					name='Russia'
					img='/location.svg'
					copyName=''
					copy={false}
				/>
			</div>
		</section>
	)
}

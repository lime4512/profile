import '../../style/contact.scss'
import { notification } from 'antd'
export const Contact = () => {
	const copyTachMail = () => {
		navigator.clipboard.writeText('lime451212@gmail.com')
		openNotificationWithIcon()
	}

	const [api, contextHolder] = notification.useNotification()

	const openNotificationWithIcon = () => {
		api['success']({
			message: 'Mail lime451212@gmail.com copied',
		})
	}
	return (
		<section className='contact' id='contact'>
			{contextHolder}
			<div className='contact__content-text'>
				<h4 className='contact__subTitle'>CONTACT</h4>
				<h2 className='contact__title'>Get In Touch</h2>
			</div>
			<div className='contact__content'>
				<img className='contact__content__img' src='/mail.svg' alt='mail' />
				<div className='contact__mail'>
					<h3 className='contact__mail__title'>Mail</h3>
					<p className='contact__mail__name'>lime451212@gmail.com</p>
				</div>
				<button className='contact__mail__copy' onClick={copyTachMail}>
					<img src='/content_copy.svg' alt='mail' />
				</button>
			</div>
		</section>
	)
}

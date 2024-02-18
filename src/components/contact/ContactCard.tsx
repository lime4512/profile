import { FunctionComponent } from 'react'
import '../../style/contactCard.scss'
import { notification } from 'antd'

interface Props {
	title: string
	name: string
	img: string
	copyName: string
	copy: boolean
}

export const ContactCard: FunctionComponent<Props> = ({
	title,
	name,
	img,
	copyName,
	copy,
}) => {
	const copyTach = () => {
		navigator.clipboard.writeText(copyName)
		openNotificationWithIcon()
	}

	const [api, contextHolder] = notification.useNotification()

	const openNotificationWithIcon = () => {
		api['success']({
			message: `${copyName} copied`,
		})
	}
	return (
		<div className='contact__content'>
			{contextHolder}
			<img className='contact__content__img' src={img} alt={title} />
			<div className='contact__mail'>
				<h3 className='contact__mail__title'>{title}</h3>
				<p className='contact__mail__name'>{name}</p>
			</div>
			{copy ? (
				<button className='contact__mail__copy' onClick={copyTach}>
					<img src='./content_copy.svg' alt='' />
				</button>
			) : (
				<></>
			)}
		</div>
	)
}

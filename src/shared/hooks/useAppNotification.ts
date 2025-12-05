import { notification, type NotificationArgsProps } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

export const useAppNotification = () => {
	const [api, contextHolder] = notification.useNotification()

	const showNotification = (
		props: NotificationArgsProps,
		type: NotificationType
	) => {
		const config: NotificationArgsProps = {
			message: props.message,
			description: props.description,
			duration: props.duration || 3,
			showProgress: props.showProgress || true,
			placement: props.placement || 'bottomRight',
			role: props.role || 'alert'
		}
		return api[type](config)
	}
	return { api, contextHolder, showNotification }
}

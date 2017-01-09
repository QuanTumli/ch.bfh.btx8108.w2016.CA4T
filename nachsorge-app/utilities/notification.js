import Exponent, {
  Constants,
	Permissions,
  Notifications
} from 'exponent';

export async function scheduleLocalNotification(title, body, data, time) {
	// Schedule notification
	const _notificationId = await Notifications.scheduleLocalNotificationAsync({
		title: title,
		body: body,
		data: data,
		ios: {
			sound: true
		},
		android: {
			vibrate: true
		}
	}, {
		time: time
	});
	return _notificationId
}
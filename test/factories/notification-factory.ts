import { Content } from './../../src/application/entities/content';
import { Notification, NotificationProps } from './../../src/application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        content: new Content('Nova notificação social'),
        category: 'social',
        recipientId: 'recipient-2',
        ...override,
    });

}
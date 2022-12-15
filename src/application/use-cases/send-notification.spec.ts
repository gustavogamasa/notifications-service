import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { NotificationsRepository } from 'src/application/repositories/notifications-repositories';
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notifications';


describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository)

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipientId'
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);

    });
});
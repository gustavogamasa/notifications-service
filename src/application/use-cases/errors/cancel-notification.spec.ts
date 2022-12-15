import { NotificationNotFound } from './notification-not-found';
import { Notification } from '../../entities/notification';
import { InMemoryNotificationsRepository } from './../../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './../cancel-notification';


import { Content } from './../../entities/content';


describe('cancel notification', () => {

    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository)

        const notification = new Notification({
            content: new Content('Nova notificação social'),
            category: 'social',
            recipientId: 'example-recipient-Id'
        });

        notificationsRepository.create(notification);

        await cancelNotification.execute({notificationId: notification.id});

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));

    });

        it('should not be able to cancel a non-existent notification', async () => {
            const notificationRepository = new InMemoryNotificationsRepository();
            const cancelNotification = new CancelNotification(notificationRepository);

            expect(()=>{
                return cancelNotification.execute({
                    notificationId: 'fake-notification-id',
                });
            }).rejects.toThrow(NotificationNotFound);
            
            

        })

});
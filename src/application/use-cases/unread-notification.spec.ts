import { makeNotification } from '../../../test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';
import { Notification } from '../entities/notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';


import { Content } from '../entities/content';


describe('Unread notification', () => {

    it('should be able to unread a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository)

        const notification = makeNotification({
            readAt: new Date(),
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute({notificationId: notification.id});

        expect(notificationsRepository.notifications[0].readAt).toBeNull();

    });

        it('should not be able to unread a non-existent notification', async () => {
            const notificationRepository = new InMemoryNotificationsRepository();
            const unreadNotification = new UnreadNotification(notificationRepository);

            expect(()=>{
                return unreadNotification.execute({
                    notificationId: 'fake-notification-id',
                });
            }).rejects.toThrow(NotificationNotFound);
            
            

        })

});
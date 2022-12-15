import { InMemoryNotificationsRepository } from './../../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from './../../../../test/factories/notification-factory';
import { GettRecipientNotifications } from './get-recipient-notifications';



describe('Get recipient notifications', () => {

    it('should be able to Get recipient notification', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotifications = new GettRecipientNotifications(notificationsRepository);



        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }));

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }));

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }));




        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({recipientId: 'recipient-1'}),
            expect.objectContaining({recipientId: 'recipient-1'}),
        ]));

    });



});
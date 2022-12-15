import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { Notification } from './../entities/notification';
import { Content } from '../entities/content';



describe('Count recipient notifications', () => {

    it('should be able to count recipient notification', async () => {
        
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);



        await notificationsRepository.create(new Notification({
            content: new Content('Nova notificação social'),
            category: 'social',
            recipientId: 'recipient-1'
        }));

        await notificationsRepository.create(new Notification({
            content: new Content('Nova notificação social'),
            category: 'social',
            recipientId: 'recipient-1'
        }));

        await notificationsRepository.create(new Notification({
            content: new Content('Nova notificação social'),
            category: 'social',
            recipientId: 'recipient-2'
        }));



      const { count } =  await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);

    });



});
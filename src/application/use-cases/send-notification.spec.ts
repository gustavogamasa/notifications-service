import { SendNotification } from './send-notifications';
describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification()

       const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipientId'
        });

        expect(notification).toBeTruthy();
        
    });
});
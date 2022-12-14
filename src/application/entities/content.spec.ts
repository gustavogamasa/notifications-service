import { Content } from './content';
test('It should be able to create a notification content', () => {
    const content = new Content('Nova notificação');

    expect(content).toBeTruthy();
})
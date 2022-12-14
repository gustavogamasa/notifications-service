import { Content } from './content';

test('It should be able to create a notification content', () => {
    const content = new Content('Nova notificação');

    expect(content).toBeTruthy();
});

test('It should not be possible to create a notification content with less than 5 characters', () => {
    expect(()=> new Content('abc')).toThrow();
});


test('It should not be possible to create a notification content with more than 240 characters', () => {
    expect(()=> new Content('abc'.repeat(241))).toThrow();
});
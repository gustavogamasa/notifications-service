import { UnreadNotification } from './../../application/use-cases/unread-notification';
import { ReadNotification } from './../../application/use-cases/read-notification';
import { GettRecipientNotifications } from './../../application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from './../../application/use-cases/count-recipient-notifications';
import { CancelNotification } from './../../application/use-cases/cancel-notification';
import { DatabaseModule } from './../database/database.module';
import { SendNotification } from './../../application/use-cases/send-notifications';
import { Module } from "@nestjs/common";
import { NotificationsController } from "./controllers/notifications.controller";


@Module({
    imports: [DatabaseModule],
    controllers:[NotificationsController],
    providers: [SendNotification, CancelNotification, CountRecipientNotifications, GettRecipientNotifications, ReadNotification, UnreadNotification]
})

export class HttpModule{}
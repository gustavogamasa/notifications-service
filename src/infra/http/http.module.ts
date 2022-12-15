import { DatabaseModule } from './../database/database.module';
import { SendNotification } from './../../application/use-cases/send-notifications';
import { Module } from "@nestjs/common";
import { NotificationsController } from "./controllers/notifications.controller";


@Module({
    imports: [DatabaseModule],
    controllers:[NotificationsController],
    providers: [SendNotification]
})

export class HttpModule{}
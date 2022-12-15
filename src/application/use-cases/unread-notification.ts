import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";

interface UnreadNotificationRequest {

    notificationId: string;
}


type UneadNotificationResponse = void;


@Injectable()
export class UnreadNotification {

    constructor(private notificationsRepository: NotificationsRepository ){}
   
    async execute(request: UnreadNotificationRequest,): Promise<UneadNotificationResponse> {
        
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);

        if (!notification){
            throw new NotificationNotFound();
        }

        notification.unread();

        await this.notificationsRepository.save(notification);

    }



}
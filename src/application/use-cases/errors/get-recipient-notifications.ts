import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "./../../repositories/notifications-repositories";

interface GettRecipientNotificationsRequest {

    recipientId: string;
}


interface GettRecipientNotificationsResponse {
    notifications: Notification[];
};


@Injectable()
export class GettRecipientNotifications {

    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: GettRecipientNotificationsRequest): Promise<GettRecipientNotificationsResponse> {

        const { recipientId } = request;

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

        return {
            notifications,
        }

    }



}
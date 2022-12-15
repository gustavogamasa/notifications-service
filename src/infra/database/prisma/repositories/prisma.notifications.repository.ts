import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repositories';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private PrismaService: PrismaService) { }

    async findById(notificationId: string): Promise<Notification | null> {
        throw new Error('Method not implemented.');
    }

    async create(notification: Notification): Promise<void> {

        const raw = PrismaNotificationMapper.toPrisma(notification)

        await this.PrismaService.notification.create({
            data: raw,
        });
    }

    async save(notification: Notification): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
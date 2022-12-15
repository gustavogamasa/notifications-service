import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from './../../../application/use-cases/send-notifications';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Controller('notifications')

export class NotificationsController {
  constructor(private SendNotification: SendNotification){}
  
  @Post()
  async create(@Body() body: CreateNotificationBody) {

    const { recipientId, content, category } = body;

    const { notification } = await this.SendNotification.execute({
      recipientId,
      content,
      category
    });

    return { notification: NotificationViewModel.toHTTP(notification),
   };

  }
}

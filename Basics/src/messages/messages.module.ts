import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  //providers are the dependencies used by the controller
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}

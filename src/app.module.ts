import { Module } from '@nestjs/common';
import { ChatGateway } from './core/chat/chat.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}

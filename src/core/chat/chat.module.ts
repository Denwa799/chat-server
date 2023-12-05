import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
	imports: [],
	controllers: [ChatController],
	providers: [PrismaService, ChatService, ChatGateway],
	exports: [ChatService],
})
export class ChatModule {}

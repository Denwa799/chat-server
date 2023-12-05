import { Controller, Get } from '@nestjs/common';
import { Chat } from '@prisma/client';

import { ChatService } from './chat.service';

@Controller('/chat')
export class ChatController {
	constructor(private readonly chatService: ChatService) {}

	@Get()
	async getChats(): Promise<Chat[]> {
		const chats = await this.chatService.getChats();
		return chats;
	}
}

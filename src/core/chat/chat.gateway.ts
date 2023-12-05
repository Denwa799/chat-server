import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Prisma } from '@prisma/client';

import { ChatService } from './chat.service';

@WebSocketGateway()
export class ChatGateway
	implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
	constructor(private readonly chatService: ChatService) {}

	@WebSocketServer() server: Server;
	@SubscribeMessage('message')
	async handleSendMessage(
		client: Socket,
		payload: Prisma.ChatCreateInput,
	): Promise<void> {
		await this.chatService.createChat(payload);
		this.server.emit('recMessage', payload);
	}

	afterInit(server: unknown): void {
		console.log(server);
	}

	handleConnection(client: Socket): void {
		console.log(`Connected: ${client.id}`);
	}

	handleDisconnect(client: Socket): void {
		console.log(`Disconnected: ${client.id}`);
	}
}

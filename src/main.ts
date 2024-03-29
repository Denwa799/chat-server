import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function start(): Promise<void> {
	const app = await NestFactory.create(AppModule);

	app.enableCors();
	app.use(helmet());

	await app.listen(3000);
}
start();

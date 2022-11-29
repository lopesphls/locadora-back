import { Module } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { ClientController } from './client.controller'
import { ClientRepository } from './client.repository'
import { ClientService } from './client.service'

@Module({
	imports: [],
	controllers: [ClientController],
	providers: [ClientService, PrismaClient, ClientRepository],
})
export class ClientModule {}

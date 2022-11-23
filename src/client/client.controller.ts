import { Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger/dist'
import { ClientService } from './client.service'

@ApiTags('clients')
@Controller('clients')
export class ClientController {
	constructor(private readonly clientService: ClientService) {}
	@Get()
	getAll() {
		return this.clientService.getAll()
	}

	@Post('create')
	create() {
		return this.clientService.create()
	}

	@Put('edit/:id')
	update() {
		return this.clientService.update()
	}

	@Delete('delete/:id')
	delete() {
		return this.clientService.delete()
	}
}

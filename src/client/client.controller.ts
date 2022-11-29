import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger/dist'
import { Request, Response } from 'express'
import { ClientService } from './client.service'
import { ClienteDto } from './dto/clientInput'

@ApiTags('Clients')
@Controller('clients')
export class ClientController {
	constructor(private readonly clientService: ClientService) {}
	@Get()
	async getAll(@Res() res: Response) {
		try {
			const clients = await this.clientService.getAllClients()
			return res.json(clients).status(200)
		} catch (error) {
			console.log(error)
			return res.send(error)
		}
	}

	@Post('create')
	async create(@Req() req: Request, @Res() res: Response) {
		try {
			const user: ClienteDto = req.body
			await this.clientService.create(user)
			return await res.status(201)
		} catch (error) {
			return res.send(error)
		}
	}

	@Put('edit/:id')
	async update(@Req() req: Request, @Res() res: Response) {
		try {
			const id = req.params.id
			const user: ClienteDto = req.body
			const client = await this.clientService.update(user, id)
			return res.json(client).json('deletado com sucesso')
		} catch (error) {
			return res.send(error)
		}
	}

	@Delete('delete/:id')
	async delete(@Req() req: Request, @Res() res: Response) {
		try {
			const { id } = req.params
			await this.clientService.delete(id)
			return res.status(200)
		} catch (error) {
			return res.send(error)
		}
	}
}

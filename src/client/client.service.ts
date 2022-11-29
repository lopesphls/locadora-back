import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { IClient } from 'src/employees/interfaces/client.interfaces'
import { ClientRepository } from './client.repository'
import { ClienteDto } from './dto/clientInput'

@Injectable()
export class ClientService {
	constructor(private readonly repository: ClientRepository) {}

	public async getAllClients() {
		return await this.repository.getAll()
	}

	public async create(user: ClienteDto): Promise<IClient> {
		const userEntity = { ...user, id: randomUUID() }
		return await this.repository.create(userEntity)
	}

	public async update(user: ClienteDto, id: string) {
		const client = { ...user, id }
		return await this.repository.update(client)
	}

	public async delete(id: string) {
		return await this.repository.delete(id)
	}
}

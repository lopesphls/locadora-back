import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { IClientEntity } from './interfaces/client.interfaces'

@Injectable()
export class ClientRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public async getAll() {
		return await this.prisma.client.findMany()
	}

	public async create(user: IClientEntity) {
		return await this.prisma.client.create({
			data: user,
		})
	}

	public async update(user: IClientEntity) {
		const { id } = user
		return await this.prisma.client.update({
			where: { id },
			data: user,
		})
	}

	public async delete(id: string) {
		return this.prisma.client.delete({
			where: { id },
		})
	}
}

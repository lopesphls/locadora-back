import { ClienteDto } from '../dto/clientInput'

export interface IClient {
	id?: string
	name: string
	CPF: string
	email: string
	password: string
}

export interface IClientEntity extends ClienteDto {
	id: string
}

export interface IClientUpdate {
	id: string
	name?: string
	CPF?: string
	email?: string
	password?: string
}

import { IsEmail, IsEmpty, IsString, Length } from 'class-validator'

export class ClienteDto {
	@IsString()
	name: string

	@Length(11, 11)
	@IsString()
	cpf: string

	@IsEmpty()
	@IsEmail()
	@IsString()
	email: string

	@IsString()
	@Length(6)
	password: string
}

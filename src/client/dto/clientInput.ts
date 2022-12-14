import { IsEmail, IsEmpty, IsString, Length } from 'class-validator'

export class ClienteDto {
	@IsEmpty()
	@IsString()
	name: string

	@Length(11, 11)
	@IsString()
	CPF: string

	@IsEmpty()
	@IsEmail()
	@IsString()
	email: string

	@IsEmpty()
	@IsString()
	@Length(6)
	password: string
}

import { Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger/dist'
import { EmployeesService } from './employees.service'

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
	constructor(private readonly employeesService: EmployeesService) {}
	@Get()
	getAll() {
		return this.employeesService.getAll()
	}

	@Post('create')
	create() {
		return this.employeesService.create()
	}

	@Put('edit/:id')
	update() {
		return this.employeesService.update()
	}

	@Delete('delete/:id')
	delete() {
		return this.employeesService.delete()
	}
}

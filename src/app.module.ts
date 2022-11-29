import { Module } from '@nestjs/common'
import { ClientModule } from './client/client.module'
import { EmployeesModule } from './employees/employees.module'

@Module({
	imports: [ClientModule, EmployeesModule],
	controllers: [],
	providers: [],
})
export class AppModule {}

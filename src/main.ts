import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { DocumentBuilder } from '@nestjs/swagger/dist'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true })

	app.useGlobalPipes(new ValidationPipe())

	const config = new DocumentBuilder()
		.setTitle('Locadora')
		.setDescription(
			'Api com finalidade para atuar entre o processo de cadastro de carros, clientes, locações e colaboradores',
		)
		.setVersion('1.0')
		.addTag('locadora')
		.build()
	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('api', app, document)

	await app.listen(3000, () => {
		console.log(`http://localhost:3000`)
	})
}

bootstrap()

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule} from '@nestjs/swagger';
import {readFileSync} from 'fs';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({origin: '*'});
    const document = JSON.parse(
        readFileSync('./openapi.json', {encoding: 'utf-8'}),
    );
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

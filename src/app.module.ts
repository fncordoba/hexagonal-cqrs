import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    // Conexión a MySQL
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'hexagonal_cqrs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Solo para desarrollo
    }),

    // Conexión a MongoDB
    MongooseModule.forRoot('mongodb://localhost:27017/hexagonal_read'),

    // Módulos de la aplicación
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}

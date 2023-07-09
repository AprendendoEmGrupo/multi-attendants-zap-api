import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: parseInt(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DATABASE,
          entities: [__dirname + '/../**/*.entity.js'],
        };
      },
    }),
    // BullModule.forRoot({
    //   redis: {
    //     connectTimeout: 10000,
    //     username: process.env.REDIS_USER,
    //     password: process.env.REDIS_PASSWORD,
    //     tls: {
    //       host: process.env.REDIS_HOST,
    //       port: Number(process.env.REDIS_PORT),
    //     },
    //   },
    // }),
    UserModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-212-228-71.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'dtmzfotfwojcds',
      password:
        'a6163b94d4c99bc5337dc61487008de2d3216442e0109908116ebb9a61a8c138',
      database: 'd4tdmh2842pmkb',
      entities: [Message],
      synchronize: true,
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

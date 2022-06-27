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
      host: 'ec2-176-34-215-248.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'utjsorhawubpdj',
      password:
        '51a4b642beec0928e4d015903b91fb22f67e1d5878ad4f9eff45527150b9d436',
      database: 'd5tmu0ucsl5jv1',
      entities: [Message],
      synchronize: true,
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

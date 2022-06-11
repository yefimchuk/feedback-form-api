import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../entity/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}

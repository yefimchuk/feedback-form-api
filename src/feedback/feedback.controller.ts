import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateMessageDTO } from './dto/create-message.dto';
import { Message } from '../entity/message.entity';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAll(): Promise<Message[]> {
    return this.feedbackService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMessageDTO: CreateMessageDTO): Promise<Message> {
    return this.feedbackService.createMessage(createMessageDTO);
  }
}

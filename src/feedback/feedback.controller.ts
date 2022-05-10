import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateMessageDTO } from './dto/create-message.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAll() {
    return this.feedbackService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createMessageDTO: CreateMessageDTO) {
    return this.feedbackService.createMessage(createMessageDTO);
  }
}

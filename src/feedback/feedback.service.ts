import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';

@Injectable()
export class FeedbackService {
  private messages = [];

  getAll() {
    return this.messages;
  }

  createMessage(messageDto: CreateMessageDTO) {
    this.messages.push({
      ...messageDto,
      id: Date.now().toString(),
    });
  }
}

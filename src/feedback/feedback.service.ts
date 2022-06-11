import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entity/message.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Message)
    private usersRepository: Repository<Message>,
  ) {}

  getAll(): Promise<Message[]> {
    return this.usersRepository.find();
  }

  createMessage(messageDto: CreateMessageDTO) {
    this.usersRepository.save(messageDto);
  }
}

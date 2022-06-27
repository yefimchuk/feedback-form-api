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
    return this.usersRepository.createQueryBuilder().getMany();
  }

  async createMessage(messageDto: CreateMessageDTO): Promise<void> {
    await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(Message)
      .values({
        email: messageDto.email,
        name: messageDto.name,
        message: messageDto.message,
      });
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async createMessage(messageDto: CreateMessageDTO): Promise<Message> {
    try {
      const newUser = new Message();
      newUser.email = messageDto.email;
      newUser.name = messageDto.name;
      newUser.message = messageDto.message;
      return await this.usersRepository.save(newUser);
    } catch (e) {
      throw new InternalServerErrorException(
        'USER_SAVE_ERROR',
        'USER_SAVE_ERROR_TYPE',
      );
    }
  }
}

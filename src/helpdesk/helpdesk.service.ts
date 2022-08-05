import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';

export class SendMessageDto {
  @ApiProperty({
    description: 'The text of the message',
    example: faker.lorem.sentence(),
    required: true,
  })
  content: string;

  @ApiProperty({
    description:
      'User sent a message? It was sent and it was true, it was received and it was false',
    example: true,
    required: false,
    default: true,
  })
  sent: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sent: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  messages: Message[];
}

const user: User = {
  id: faker.random.alphaNumeric(10),
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
  messages: [
    {
      id: faker.random.alphaNumeric(10),
      content: faker.lorem.sentence(),
      timestamp: faker.date.recent().toISOString(),
      sent: true,
    },
    {
      id: faker.random.alphaNumeric(10),
      content: faker.lorem.sentence(),
      timestamp: faker.date.recent().toISOString(),
      sent: false,
    },
  ],
};

@Injectable()
export class HelpdeskService {
  getHelpdesk(): User {
    return user;
  }

  sendMessage(message: { content: string; sent: boolean }): Message {
    const newMessage = {
      id: faker.random.alphaNumeric(10),
      content: message.content,
      timestamp: new Date().toISOString(),
      sent: message.sent || true,
    };
    user.messages.push(newMessage);
    return newMessage;
  }
}

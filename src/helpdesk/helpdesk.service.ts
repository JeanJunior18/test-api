import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

export class SendMessageDto {
  @ApiProperty({
    description: 'The text of the message',
    example: faker.lorem.sentence(),
    required: true,
  })
  content: string;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sent: boolean;
}

export interface HelpDeskInterface {
  id: string;
  name: string;
  email: string;
  avatar: string;
  messages: Message[];
}

const helpDesk: HelpDeskInterface = {
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
@WebSocketGateway()
export class HelpDeskService {
  @WebSocketServer() server: Server;

  getHelpDesk(): HelpDeskInterface {
    return helpDesk;
  }

  sendMessage(message: SendMessageDto): Message {
    const newMessage: Message = {
      id: faker.random.alphaNumeric(10),
      content: message.content,
      timestamp: new Date().toISOString(),
      sent: true,
    };

    this.sendBroadcast(newMessage);

    setTimeout(() => {
      this.autoReplyMessage();
    }, 1000);

    helpDesk.messages.push(newMessage);
    return newMessage;
  }

  private autoReplyMessage(): Message {
    const newMessage: Message = {
      id: faker.random.alphaNumeric(10),
      content: faker.lorem.sentence(),
      timestamp: new Date().toISOString(),
      sent: false,
    };
    this.sendBroadcast(newMessage);
    helpDesk.messages.push(newMessage);
    return newMessage;
  }

  private sendBroadcast(message: Message): void {
    this.server.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  }
}

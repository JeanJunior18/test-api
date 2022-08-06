import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';

export abstract class SendMessageDto {
  @ApiProperty({
    description: 'The text of the message',
    example: faker.lorem.sentence(),
    required: true,
  })
  content: string;
}

export abstract class Message {
  @ApiProperty({
    description: 'The unique identifier of the message',
  })
  id: string;

  @ApiProperty({
    description: 'The text of the message',
  })
  content: string;

  @ApiProperty({
    description: 'The timestamp of the message',
  })
  timestamp: string;

  @ApiProperty({
    description:
      'Whether the message was sent by the client (false) or the attendance (true)',
  })
  sent: boolean;
}

export abstract class HelpDeskInterface {
  @ApiProperty({
    description: 'The unique identifier of the help desk',
  })
  id: string;

  @ApiProperty({
    description: 'The name of the client',
  })
  name: string;

  @ApiProperty({
    description: 'The email of the client',
  })
  email: string;

  @ApiProperty({
    description: 'The avatar of the client',
  })
  avatar: string;

  @ApiProperty({
    description: 'The messages of the help desk',
    type: [Message],
  })
  messages: Message[];
}

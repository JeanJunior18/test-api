import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  HelpDeskInterface,
  Message,
  SendMessageDto,
} from 'src/helpdesk/helpdesk.dto';
import { HelpDeskService } from 'src/helpdesk/helpdesk.service';

@ApiTags('HelpDesk')
@Controller('helpdesk')
export class HelpDeskController {
  constructor(private readonly helpDeskService: HelpDeskService) {}

  @Get('')
  @ApiOperation({
    summary: 'Get help desk with all messages',
  })
  @ApiResponse({
    status: 200,
    description: 'Help desk with all messages',
    type: HelpDeskInterface,
  })
  getHelpDesk(): HelpDeskInterface {
    return this.helpDeskService.getHelpDesk();
  }

  @Post('sendMessage')
  @ApiResponse({ status: 201, description: 'Message sent', type: Message })
  @ApiOperation({
    summary:
      'Send a message that will be published via WebSocket and after a second it will send an automatic response simulating client interaction',
  })
  sendMessage(@Body() message: SendMessageDto) {
    return this.helpDeskService.sendMessage(message);
  }
}

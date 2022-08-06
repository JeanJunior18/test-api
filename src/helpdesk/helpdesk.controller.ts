import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { HelpDeskService, SendMessageDto } from 'src/helpdesk/helpdesk.service';

@ApiTags('HelpDesk')
@Controller('helpdesk')
export class HelpDeskController {
  constructor(private readonly helpDeskService: HelpDeskService) {}

  @Get('')
  @ApiOperation({ summary: 'Get help desk with all messages' })
  getHelpDesk() {
    return this.helpDeskService.getHelpDesk();
  }

  @Post('sendMessage')
  @ApiOperation({
    summary:
      'Send a message that will be published via WebSocket and after a second it will send an automatic response simulating client interaction',
  })
  sendMessage(@Body() message: SendMessageDto) {
    return this.helpDeskService.sendMessage(message);
  }
}

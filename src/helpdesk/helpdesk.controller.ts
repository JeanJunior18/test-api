import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelpDeskService, SendMessageDto } from 'src/helpdesk/helpdesk.service';

@ApiTags('HelpDesk')
@Controller('helpdesk')
export class HelpDeskController {
  constructor(private readonly helpDeskService: HelpDeskService) {}

  @Get('')
  getHelpDesk() {
    return this.helpDeskService.getHelpDesk();
  }

  @Post('sendMessage')
  sendMessage(@Body() message: SendMessageDto) {
    return this.helpDeskService.sendMessage(message);
  }
}

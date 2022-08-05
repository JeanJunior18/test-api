import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelpdeskService, SendMessageDto } from 'src/helpdesk/helpdesk.service';

@ApiTags('Helpdesk')
@Controller('helpdesk')
export class HelpdeskController {
  constructor(private readonly helpdeskService: HelpdeskService) {}

  @Get('')
  getHelpdesk() {
    return this.helpdeskService.getHelpdesk();
  }

  @Post('sendMessage')
  sendMessage(@Body() message: SendMessageDto) {
    return this.helpdeskService.sendMessage(message);
  }
}

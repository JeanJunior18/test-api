import { Module } from '@nestjs/common';
import { HelpDeskService } from './helpdesk.service';
import { HelpDeskController } from './helpdesk.controller';

@Module({
  providers: [HelpDeskService],
  controllers: [HelpDeskController],
})
export class HelpDeskModule {}

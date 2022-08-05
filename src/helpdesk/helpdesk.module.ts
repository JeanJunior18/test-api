import { Module } from '@nestjs/common';
import { HelpdeskService } from './helpdesk.service';
import { HelpdeskController } from './helpdesk.controller';

@Module({
  providers: [HelpdeskService],
  controllers: [HelpdeskController],
})
export class HelpdeskModule {}

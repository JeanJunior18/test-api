import { Module } from '@nestjs/common';
import { HelpDeskModule } from './helpdesk/helpdesk.module';

@Module({
  imports: [HelpDeskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

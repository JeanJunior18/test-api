import { Module } from '@nestjs/common';
import { HelpdeskModule } from './helpdesk/helpdesk.module';

@Module({
  imports: [HelpdeskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

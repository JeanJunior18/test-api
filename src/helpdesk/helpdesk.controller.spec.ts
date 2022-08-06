import { Test, TestingModule } from '@nestjs/testing';
import { HelpDeskController } from './helpdesk.controller';

describe('HelpdeskController', () => {
  let controller: HelpDeskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpDeskController],
    }).compile();

    controller = module.get<HelpDeskController>(HelpDeskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

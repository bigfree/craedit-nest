import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowVersionsController } from './workflow-versions.controller';
import { WorkflowVersionsService } from './workflow-versions.service';

describe('WorkflowVersionsController', () => {
  let controller: WorkflowVersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkflowVersionsController],
      providers: [WorkflowVersionsService],
    }).compile();

    controller = module.get<WorkflowVersionsController>(WorkflowVersionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowVersionsService } from './workflow-versions.service';

describe('WorkflowVersionsService', () => {
  let service: WorkflowVersionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkflowVersionsService],
    }).compile();

    service = module.get<WorkflowVersionsService>(WorkflowVersionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

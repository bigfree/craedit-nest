import { Module } from '@nestjs/common';
import { WorkflowVersionsService } from './workflow-versions.service';
import { WorkflowVersionsController } from './workflow-versions.controller';

@Module({
  controllers: [WorkflowVersionsController],
  providers: [WorkflowVersionsService]
})
export class WorkflowVersionsModule {}

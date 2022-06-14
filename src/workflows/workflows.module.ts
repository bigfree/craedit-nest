import { Module } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { WorkflowsController } from './workflows.controller';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [WorkflowsController],
  providers: [WorkflowsService, PrismaService]
})
export class WorkflowsModule {}

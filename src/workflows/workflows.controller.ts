import { Controller, Get, Param, Query } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { Workflow } from '../../prisma/generated/prisma-client-js';

@Controller('workflows')
export class WorkflowsController {
    constructor(private readonly workflowsService: WorkflowsService) {
    }

    @Get(':id')
    async workflow(
        @Param('id') id: string,
    ): Promise<Workflow | null> {
        return this.workflowsService.workflow({
            id,
        });
    }

    @Get()
    async workflows(
        @Query('take') take?: number,
        @Query('skip') skip?: number,
        @Query('searchString') searchString?: string,
        @Query('orderBy') orderBy?: 'asc' | 'desc',
    ): Promise<Workflow[]> {
        return this.workflowsService.workflows({});
    }
}

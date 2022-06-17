import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { Prisma, Workflow } from '../../prisma/generated/prisma-client-js';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { WorkflowEntity } from './entities/workflow.entity';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import SortOrder = Prisma.SortOrder;

@Controller('api/workflow')
@ApiTags('workflows')
export class WorkflowsController {
    constructor(private readonly workflowsService: WorkflowsService) {
    }

    @Get()
    @ApiOkResponse({ type: [WorkflowEntity] })
    async workflows(
        @Query('take') take?: number,
        @Query('skip') skip?: number,
        @Query('searchString') searchString?: string,
        @Query('orderBy') orderBy?: SortOrder,
    ): Promise<Workflow[]> {
        return this.workflowsService.workflows({});
    }

    @Get(':id')
    @ApiOkResponse({ type: WorkflowEntity })
    async workflow(
        @Param('id') id: string,
    ): Promise<Workflow | null> {
        return this.workflowsService.workflow({
            id,
        });
    }

    @Post()
    @ApiCreatedResponse({ type: WorkflowEntity })
    async createWorkflow(
        @Body() postData: CreateWorkflowDto,
    ): Promise<Workflow> {
        return this.workflowsService.createWorkflow(postData);
    }

    @Patch(':id')
    @ApiOkResponse({ type: WorkflowEntity })
    async update(
        @Param('id') id: string,
        @Body() data: UpdateWorkflowDto,
    ): Promise<Workflow> {
        return this.workflowsService.updateWorkflow(id, data);
    }

    @Delete(':id')
    @ApiOkResponse({ type: WorkflowEntity })
    async deleteWorkflow(
        @Param('id') id: string,
    ): Promise<Workflow | null> {
        return this.workflowsService.deleteWorkflow(id);
    }
}

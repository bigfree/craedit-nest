import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { WorkflowVersionsService } from './workflow-versions.service';
import { CreateWorkflowVersionDto } from './dto/create-workflow-version.dto';
import { UpdateWorkflowVersionDto } from './dto/update-workflow-version.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { WorkflowVersionEntity } from './entities/workflow-version.entity';

@Controller('api/workflow-versions')
@ApiTags('workflow-versions')
export class WorkflowVersionsController {
    constructor(private readonly workflowVersionsService: WorkflowVersionsService) {
    }

    @Post()
    @ApiCreatedResponse({
        type: WorkflowVersionEntity,
    })
    async create(
        @Body() createWorkflowVersionDto: CreateWorkflowVersionDto
    ): Promise<WorkflowVersionEntity> {
        return this.workflowVersionsService.create(createWorkflowVersionDto);
    }

    @Get()
    findAll() {
        return this.workflowVersionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workflowVersionsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkflowVersionDto: UpdateWorkflowVersionDto) {
        return this.workflowVersionsService.update(+id, updateWorkflowVersionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workflowVersionsService.remove(+id);
    }
}

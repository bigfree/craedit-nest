import { Injectable } from '@nestjs/common';
import { CreateWorkflowVersionDto } from './dto/create-workflow-version.dto';
import { UpdateWorkflowVersionDto } from './dto/update-workflow-version.dto';
import { PrismaService } from '../prisma/prisma.service';
import { WorkflowVersion } from '../../prisma/generated/prisma-client-js';

@Injectable()
export class WorkflowVersionsService {
    constructor(private readonly prisma: PrismaService) {
    }

    async create(
        createWorkflowVersionDto: CreateWorkflowVersionDto,
    ): Promise<WorkflowVersion> {
        return this.prisma.workflowVersion.create({
            data: createWorkflowVersionDto,
        });
    }

    findAll() {
        return `This action returns all workflowVersions`;
    }

    findOne(id: number) {
        return `This action returns a #${id} workflowVersion`;
    }

    update(id: number, updateWorkflowVersionDto: UpdateWorkflowVersionDto) {
        return `This action updates a #${id} workflowVersion`;
    }

    remove(id: number) {
        return `This action removes a #${id} workflowVersion`;
    }
}

import { Injectable } from '@nestjs/common';
import { Prisma, Workflow } from '../../prisma/generated/prisma-client-js';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import WorkflowWhereUniqueInput = Prisma.WorkflowWhereUniqueInput;
import WorkflowWhereInput = Prisma.WorkflowWhereInput;
import WorkflowOrderByWithRelationInput = Prisma.WorkflowOrderByWithRelationInput;

@Injectable()
export class WorkflowsService {
    constructor(private readonly prisma: PrismaService) {
    }

    /**
     * Fetch all workflows
     * @param params
     */
    async workflows(params: {
        skip?: number;
        take?: number;
        cursor?: WorkflowWhereUniqueInput;
        where?: WorkflowWhereInput;
        orderBy?: WorkflowOrderByWithRelationInput;
    }): Promise<Workflow[]> {
        return this.prisma.workflow.findMany({
            ...params,
            include: {
                versions: true
            }
        });
    }

    /**
     * Fetch workflow by ID
     * @param workflowWhereUniqueInput
     */
    async workflow(
        workflowWhereUniqueInput: WorkflowWhereUniqueInput,
    ): Promise<Workflow | null> {
        return this.prisma.workflow.findUnique({
            where: workflowWhereUniqueInput,
            include: {
                versions: true
            }
        });
    }

    /**
     * Create workflow
     * @param data
     */
    async createWorkflow(
        data: CreateWorkflowDto,
    ): Promise<Workflow> {
        return this.prisma.workflow.create({
            data,
        });
    }

    async updateWorkflow(
        id: string,
        updateWorkflowDto: UpdateWorkflowDto,
    ): Promise<Workflow> {
        return this.prisma.workflow.update({
            where: {
                id,
            },
            data: updateWorkflowDto,
        });
    }

    async deleteWorkflow(
        id: string,
    ): Promise<Workflow> {
        return this.prisma.workflow.delete({
            where: {
                id,
            },
        });
    }
}

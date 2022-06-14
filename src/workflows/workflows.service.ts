import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma, Workflow } from '../../prisma/generated/prisma-client-js';
import WorkflowWhereUniqueInput = Prisma.WorkflowWhereUniqueInput;
import WorkflowWhereInput = Prisma.WorkflowWhereInput;
import WorkflowOrderByWithRelationInput = Prisma.WorkflowOrderByWithRelationInput;

@Injectable()
export class WorkflowsService {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * Fetch unique workflow by Id
     * @param workflowWhereUniqueInput
     */
    async workflow(
        workflowWhereUniqueInput: WorkflowWhereUniqueInput
    ): Promise<Workflow | null> {
        return this.prismaService.workflow.findUnique({
            where: workflowWhereUniqueInput
        });
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
        return this.prismaService.workflow.findMany(params);
    }
}

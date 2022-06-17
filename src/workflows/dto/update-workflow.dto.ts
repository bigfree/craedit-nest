import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowDto } from './create-workflow.dto';
import { Prisma } from '../../../prisma/generated/prisma-client-js';
import WorkflowUpdateInput = Prisma.WorkflowUpdateInput;

export class UpdateWorkflowDto extends PartialType(CreateWorkflowDto) implements WorkflowUpdateInput {
}
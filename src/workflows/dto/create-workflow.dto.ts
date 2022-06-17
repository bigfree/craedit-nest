import { Prisma } from '../../../prisma/generated/prisma-client-js';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import WorkflowCreateInput = Prisma.WorkflowCreateInput;

export class CreateWorkflowDto implements WorkflowCreateInput {
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    public locked?: boolean | null;
}
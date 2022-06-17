import { Workflow } from '../../../prisma/generated/prisma-client-js';
import { ApiProperty } from '@nestjs/swagger';

export class WorkflowEntity implements Workflow {
    @ApiProperty()
    public id: string;

    @ApiProperty()
    public locked: boolean;

    @ApiProperty()
    public createdAt: Date;

    @ApiProperty({ required: false, nullable: true })
    public updatedAt: Date | null;
}
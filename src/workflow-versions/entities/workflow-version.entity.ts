import { WorkflowVersion } from '../../../prisma/generated/prisma-client-js';
import { ApiProperty } from '@nestjs/swagger';

export class WorkflowVersionEntity implements WorkflowVersion {
    @ApiProperty()
    public id: string;

    @ApiProperty()
    public iId: string;

    @ApiProperty()
    public name: string;

    @ApiProperty({ nullable: true })
    public description: string | null;

    @ApiProperty()
    public version: number;

    @ApiProperty({ nullable: true })
    public draft: boolean | null;

    @ApiProperty({ nullable: true })
    public active: boolean | null;

    @ApiProperty()
    public createdAt: Date;

    @ApiProperty({ required: false, nullable: true })
    public updatedAt: Date | null;

    @ApiProperty()
    public workflowId: string;
}

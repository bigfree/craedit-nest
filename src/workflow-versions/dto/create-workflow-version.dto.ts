import { Prisma } from '../../../prisma/generated/prisma-client-js';
import WorkflowVersionCreateInput = Prisma.WorkflowVersionCreateInput;
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkflowVersionDto implements WorkflowVersionCreateInput {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public iId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    public description?: string | null;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public version: number;

    @IsNotEmpty()
    @IsOptional()
    @IsBoolean()
    public draft?: boolean | null;

    @ApiProperty()
    public points: Prisma.PointsOnWorkflowsCreateNestedManyWithoutWorkflowInput;

    @ApiProperty()
    public workflow: Prisma.WorkflowCreateNestedOneWithoutVersionsInput;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    public active?: boolean | null;
}

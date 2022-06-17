import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { Workflow } from '../prisma/generated/prisma-client-js';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private prisma: PrismaService
    ) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('test')
    getTest(): Promise<Workflow[] | null> {
        return this.prisma.workflow.findMany({});
    }
}

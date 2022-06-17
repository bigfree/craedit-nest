import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkflowsModule } from './workflows/workflows.module';
import { PrismaModule } from './prisma/prisma.module';
import { WorkflowVersionsModule } from './workflow-versions/workflow-versions.module';

@Module({
    imports: [WorkflowsModule, PrismaModule, WorkflowVersionsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

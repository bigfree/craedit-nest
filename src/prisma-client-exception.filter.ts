import { ArgumentsHost, Catch } from '@nestjs/common';
import { Prisma } from '../prisma/generated/prisma-client-js';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        super.catch(exception, host);
    }
}
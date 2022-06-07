import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TodoService, TodoResolver,PrismaService],
  exports: [TodoService]
})
export class TodoModule {}

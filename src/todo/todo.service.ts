import { Injectable } from '@nestjs/common';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import {PrismaService} from 'src/prisma.service';
import {FindFirstTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args'
import {FindUniqueTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args'
import{ CreateOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args'
import {UpdateOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args'
import {DeleteOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args'

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService){}

    async findFirst(args: FindFirstTodoArgs): Promise<Todo | null> {
        return this.prisma.todo.findFirst(args);
    }

    async createTodo(args: CreateOneTodoArgs): Promise<Todo>{
        return this.prisma.todo.create(args);
    }

    async findUnique(args: FindUniqueTodoArgs): Promise<Todo| null>{
        return this.prisma.todo.findUnique(args);
    }

    async updateTodo(args: UpdateOneTodoArgs): Promise<Todo>{
        return this.prisma.todo.update(args);
    }

    async deleteTodo(args: DeleteOneTodoArgs): Promise<Todo>{
        return this.prisma.todo.delete(args);
    }
}
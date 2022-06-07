import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {Todo} from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import {CreateOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import {FindFirstTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args'
import { TodoService } from 'src/todo/todo.service';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import {UpdateOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import {DeleteOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
@Resolver(() => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService){}

    // CREATE
    @Mutation(() => Todo)
    async createTodo(
        @Args() args: CreateOneTodoArgs
    ){
        return this.todoService.createTodo(args);
    }

    // READ
    @Query(() => Todo)
    todoUnique(@Args() args: FindUniqueTodoArgs){
        return this.todoService.findUnique(args);
    }

    //UPDATE
    @Mutation(() => Todo)
    todoUpdate(@Args() args: UpdateOneTodoArgs){
        return this.todoService.updateTodo(args);
    }

    //DELETE
    @Mutation(() => Todo)
    todoDelete(@Args() args :DeleteOneTodoArgs){
        return this.todoService.deleteTodo(args);
    }

}

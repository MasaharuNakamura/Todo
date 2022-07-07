import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import {Todo} from 'src/@generated/prisma-nestjs-graphql/todo/todo.model';
import {CreateOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { TodoService } from 'src/todo/todo.service';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import {UpdateOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import {DeleteOneTodoArgs} from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { PubSub } from 'graphql-subscriptions';

/*
PubSubインスタンスを作成。ここにWebsocketするための関数とかいい感じになるやつ全部入っとる。こいつを使いまわしていく。
*/
const pubsub = new PubSub();
@Resolver(() => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService){}

    @Subscription(
        /*
          //クライアントに通知（返す）値の型を定義。今回はtodoが新しく追加されたらそのtodoをクライアントに返してみるので、型はTodo
          // 
          */
        () => Todo,
        /*明示的に第二引数にオブジェクトに格納してnameを指定するとここをsubsucription名としてSDLを生成できる。*/
        {
          name: 'todoAdded',
        },
     )

     async todoAdded(){
        return pubsub.asyncIterator('todoAdded');
     }

    // CREATE
    // @Mutation(() => Todo)
    // async createTodo(
    //     @Args() args: CreateOneTodoArgs
    // ){
    //     return this.todoService.createTodo(args);
    // }

    //subscription
    @Mutation(() => Todo)
    async createTodo(
        @Args() args: CreateOneTodoArgs
    ){
        const newTodo = this.todoService.createTodo(args);

        pubsub.publish('todoAdded', { todoAdded: newTodo });
        //publishしたらいつも通りmutationの戻り値を返してる。
        return newTodo;
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

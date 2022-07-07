import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { FindUniqueUserArgs } from "src/@generated/prisma-nestjs-graphql/user/find-unique-user.args";
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PubSub } from 'graphql-subscriptions';

/*
PubSubインスタンスを作成。ここにWebsocketするための関数とかいい感じになるやつ全部入っとる。こいつを使いまわしていく。
*/
const pubsub = new PubSub();
@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}


    @Subscription(
        /*
          //クライアントに通知（返す）値の型を定義。今回はtodoが新しく追加されたらそのtodoをクライアントに返してみるので、型はTodo
          // 
          */
        () => User,
        /*明示的に第二引数にオブジェクトに格納してnameを指定するとここをsubsucription名としてSDLを生成できる。*/
        {
          name: 'userAdded',
        },
     )

     async userAdded(){
        return pubsub.asyncIterator('userAdded');
     }


    @Query(() => User)
      @UseGuards(JwtAuthGuard)
    user(
        @Args() args: FindFirstUserArgs
    ) {
        return this.userService.findFirst(args)
    }

    @Query(() => User)
    userUnique(@Args() args: FindUniqueUserArgs){
        return this.userService.findUnique(args);
    }

    


    @Mutation(() => User)
    async createUser(
        @Args() args: CreateOneUserArgs
    ) {
        args.data.password = await bcrypt.hash(args.data.password, 10);
        const newUser = this.userService.createUser(args);

        pubsub.publish('userAdded', { userAdded: newUser });
        //publishしたらいつも通りmutationの戻り値を返してる。
        return newUser;
    }

    // @Mutation(() => User)
    // async createUser(
    //     @Args() args: CreateOneUserArgs
    // ) {
    //     args.data.password = await bcrypt.hash(args.data.password, 10);
    //     return this.userService.createUser(args);
    // }
}
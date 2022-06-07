import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoCreateInput } from './todo-create.input';
import { TodoUpdateInput } from './todo-update.input';

@ArgsType()
export class UpsertOneTodoArgs {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoCreateInput, {nullable:false})
    @Type(() => TodoCreateInput)
    create!: TodoCreateInput;

    @Field(() => TodoUpdateInput, {nullable:false})
    @Type(() => TodoUpdateInput)
    update!: TodoUpdateInput;
}

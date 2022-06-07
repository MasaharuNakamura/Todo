import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoUpdateInput } from './todo-update.input';
import { Type } from 'class-transformer';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@ArgsType()
export class UpdateOneTodoArgs {

    @Field(() => TodoUpdateInput, {nullable:false})
    @Type(() => TodoUpdateInput)
    data!: TodoUpdateInput;

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;
}

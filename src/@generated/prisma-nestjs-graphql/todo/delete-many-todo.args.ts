import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTodoArgs {

    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: TodoWhereInput;
}

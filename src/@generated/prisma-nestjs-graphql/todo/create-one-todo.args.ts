import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoCreateInput } from './todo-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneTodoArgs {

    @Field(() => TodoCreateInput, {nullable:false})
    @Type(() => TodoCreateInput)
    @ValidateNested()
    @Type(() => TodoCreateInput)
    data!: TodoCreateInput;
}

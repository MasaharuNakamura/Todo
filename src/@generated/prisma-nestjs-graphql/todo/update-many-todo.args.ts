import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoUpdateManyMutationInput } from './todo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TodoWhereInput } from './todo-where.input';

@ArgsType()
export class UpdateManyTodoArgs {

    @Field(() => TodoUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoUpdateManyMutationInput)
    data!: TodoUpdateManyMutationInput;

    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: TodoWhereInput;
}

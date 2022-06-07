import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';
import { TodoOrderByWithRelationInput } from './todo-order-by-with-relation.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoScalarFieldEnum } from './todo-scalar-field.enum';

@ArgsType()
export class FindManyTodoArgs {

    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: TodoWhereInput;

    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;

    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: TodoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';
import { TodoOrderByWithRelationInput } from './todo-order-by-with-relation.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoCountAggregateInput } from './todo-count-aggregate.input';
import { TodoAvgAggregateInput } from './todo-avg-aggregate.input';
import { TodoSumAggregateInput } from './todo-sum-aggregate.input';
import { TodoMinAggregateInput } from './todo-min-aggregate.input';
import { TodoMaxAggregateInput } from './todo-max-aggregate.input';

@ArgsType()
export class TodoAggregateArgs {

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

    @Field(() => TodoCountAggregateInput, {nullable:true})
    _count?: TodoCountAggregateInput;

    @Field(() => TodoAvgAggregateInput, {nullable:true})
    _avg?: TodoAvgAggregateInput;

    @Field(() => TodoSumAggregateInput, {nullable:true})
    _sum?: TodoSumAggregateInput;

    @Field(() => TodoMinAggregateInput, {nullable:true})
    _min?: TodoMinAggregateInput;

    @Field(() => TodoMaxAggregateInput, {nullable:true})
    _max?: TodoMaxAggregateInput;
}

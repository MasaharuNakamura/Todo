import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';
import { Type } from 'class-transformer';
import { TodoOrderByWithAggregationInput } from './todo-order-by-with-aggregation.input';
import { TodoScalarFieldEnum } from './todo-scalar-field.enum';
import { TodoScalarWhereWithAggregatesInput } from './todo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TodoCountAggregateInput } from './todo-count-aggregate.input';
import { TodoAvgAggregateInput } from './todo-avg-aggregate.input';
import { TodoSumAggregateInput } from './todo-sum-aggregate.input';
import { TodoMinAggregateInput } from './todo-min-aggregate.input';
import { TodoMaxAggregateInput } from './todo-max-aggregate.input';

@ArgsType()
export class TodoGroupByArgs {

    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: TodoWhereInput;

    @Field(() => [TodoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithAggregationInput>;

    @Field(() => [TodoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TodoScalarFieldEnum>;

    @Field(() => TodoScalarWhereWithAggregatesInput, {nullable:true})
    having?: TodoScalarWhereWithAggregatesInput;

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

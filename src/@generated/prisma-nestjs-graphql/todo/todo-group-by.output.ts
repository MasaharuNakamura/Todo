import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoCountAggregate } from './todo-count-aggregate.output';
import { TodoAvgAggregate } from './todo-avg-aggregate.output';
import { TodoSumAggregate } from './todo-sum-aggregate.output';
import { TodoMinAggregate } from './todo-min-aggregate.output';
import { TodoMaxAggregate } from './todo-max-aggregate.output';

@ObjectType()
export class TodoGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => TodoCountAggregate, {nullable:true})
    _count?: TodoCountAggregate;

    @Field(() => TodoAvgAggregate, {nullable:true})
    _avg?: TodoAvgAggregate;

    @Field(() => TodoSumAggregate, {nullable:true})
    _sum?: TodoSumAggregate;

    @Field(() => TodoMinAggregate, {nullable:true})
    _min?: TodoMinAggregate;

    @Field(() => TodoMaxAggregate, {nullable:true})
    _max?: TodoMaxAggregate;
}

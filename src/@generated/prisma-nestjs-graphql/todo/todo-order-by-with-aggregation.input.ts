import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TodoCountOrderByAggregateInput } from './todo-count-order-by-aggregate.input';
import { TodoAvgOrderByAggregateInput } from './todo-avg-order-by-aggregate.input';
import { TodoMaxOrderByAggregateInput } from './todo-max-order-by-aggregate.input';
import { TodoMinOrderByAggregateInput } from './todo-min-order-by-aggregate.input';
import { TodoSumOrderByAggregateInput } from './todo-sum-order-by-aggregate.input';

@InputType()
export class TodoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disctiption?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => TodoCountOrderByAggregateInput, {nullable:true})
    _count?: TodoCountOrderByAggregateInput;

    @Field(() => TodoAvgOrderByAggregateInput, {nullable:true})
    _avg?: TodoAvgOrderByAggregateInput;

    @Field(() => TodoMaxOrderByAggregateInput, {nullable:true})
    _max?: TodoMaxOrderByAggregateInput;

    @Field(() => TodoMinOrderByAggregateInput, {nullable:true})
    _min?: TodoMinOrderByAggregateInput;

    @Field(() => TodoSumOrderByAggregateInput, {nullable:true})
    _sum?: TodoSumOrderByAggregateInput;
}

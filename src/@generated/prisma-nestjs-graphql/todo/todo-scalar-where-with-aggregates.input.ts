import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';

@InputType()
export class TodoScalarWhereWithAggregatesInput {

    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TodoScalarWhereWithAggregatesInput>;

    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TodoScalarWhereWithAggregatesInput>;

    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TodoScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    completed?: BoolNullableWithAggregatesFilter;
}

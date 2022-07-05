import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class TodoWhereInput {

    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    completed?: BoolNullableFilter;
}

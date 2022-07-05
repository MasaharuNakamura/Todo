import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Todo {

    @Field(() => ID, {nullable:false})
    id!: number;

    /**
     * @validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@validator.@IsNotEmpty()'})
    title!: string;

    /**
     * @validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@validator.@IsNotEmpty()'})
    description!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    completed!: boolean | null;
}

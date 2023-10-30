import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field()
  name: string;
}

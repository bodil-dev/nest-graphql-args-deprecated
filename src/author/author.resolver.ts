/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.model';

@Resolver(() => Author)
export class AuthorResolver {
  @Query(() => Author)
  async author(
    @Args('id', { deprecationReason: 'We only support a single author' } as any)
    id?: string,
  ) {
    return { name: 'Lev Tolstoj' };
  }
}

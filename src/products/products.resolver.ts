import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.schema';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async getProducts(
    @Args('page', { type: () => Number, nullable: true }) page: number = 1,
    @Args('limit', { type: () => Number, nullable: true }) limit: number = 10,
  ) {
    return this.productsService.findAll(page, limit);
  }

  @Query(() => Product)
  async getProduct(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }
}

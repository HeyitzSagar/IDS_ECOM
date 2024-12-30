import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from './cart.schema';

@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => Cart)
  async getCart(@Args('id') id: string) {
    return this.cartService.findCart(id);
  }

  

  @Mutation(() => Cart)
  async addToCart(
    @Args('userId') userId: string,
    @Args('productId') productId: string,
    @Args('quantity') quantity: number,
    @Args('price') price: number,
  ) {
    return this.cartService.addToCart(userId, productId, quantity, price);
  }

  @Mutation(() => Cart)
  async removeFromCart(
    @Args('userId') userId: string,
    @Args('productId') productId: string,
  ) {
    return this.cartService.removeFromCart(userId, productId);
  }

}

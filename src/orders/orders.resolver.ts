import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './orders.schema';
import { CheckoutInput } from './dto/checkout.input';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [Order])
  async getOrders() {
    return this.ordersService.findAll();
  }

  @Query(() => Order)
  async getOrder(@Args('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Order)
  async checkout(@Args('input') checkoutInput: CheckoutInput) {
    return this.ordersService.createOrder(checkoutInput);
  }
}

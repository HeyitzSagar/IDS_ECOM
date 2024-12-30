import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class OrderItemInput {
  @Field()
  productId: string;

  @Field()
  quantity: number;

  @Field()
  price: number;
}

@InputType()
export class CheckoutInput {
  @Field()
  userId: string;

  @Field(() => [OrderItemInput])
  items: OrderItemInput[];
}
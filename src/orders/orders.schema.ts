import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Order extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  userId: string;

  @Field(() => [OrderItem])
  @Prop({ type: [{ productId: String, quantity: Number, price: Number }] })
  items: { productId: string; quantity: number; price: number }[];

  @Field()
  @Prop()
  totalPrice: number;

  @Field()
  @Prop({ default: Date.now })
  date: Date;
}

@ObjectType()
export class OrderItem {
  @Field()
  productId: string;

  @Field()
  quantity: number;

  @Field()
  price: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

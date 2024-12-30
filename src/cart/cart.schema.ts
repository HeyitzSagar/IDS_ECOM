import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Cart extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  userId: string;

  @Field(() => [CartItem])
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
export class CartItem {
  @Field()
  productId: string;

  @Field()
  quantity: number;

  @Field()
  price: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Product extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop()
  price: number;

  @Field()
  @Prop()
  description: string;

  @Field({ nullable: true })
  @Prop()
  category: string;

  @Field()
  @Prop()
  stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

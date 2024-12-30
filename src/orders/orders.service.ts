import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './orders.schema';
import { CheckoutInput } from './dto/checkout.input';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async findOrders(userId: string): Promise<Order[]> {
    return this.orderModel.find({ userId }).exec();
  }

  // async createOrder(orderData: Partial<Order>): Promise<Order> {
  //   return new this.orderModel(orderData).save();
  // }
  async createOrder(checkoutInput: CheckoutInput): Promise<Order> {
    const totalPrice = checkoutInput.items.reduce(
      (sum, item) => sum + item.price * item.quantity, 
      0
    );

    const order = new this.orderModel({
      userId: checkoutInput.userId,
      items: checkoutInput.items,
      totalPrice,
      date: new Date()
    });

    return order.save();
  }
}

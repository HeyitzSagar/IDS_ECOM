import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async findCart(id: string): Promise<Cart> {
    return this.cartModel.findById(id).exec();
  }

  async addToCart(userId: string, productId: string, quantity: number, price: number): Promise<Cart> {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (cart) {
      cart.items.push({ productId, quantity, price });
      cart.totalPrice += price * quantity;
      return cart.save();
    } else {
      const newCart = new this.cartModel({
        userId,
        items: [{ productId, quantity, price }],
        totalPrice: price * quantity,
      });
      return newCart.save();
    }
  }

  async removeFromCart(userId: string, productId: string) {
    const cart = await this.cartModel.findOne({ userId });
    cart.items = cart.items.filter((item) => item.productId !== productId);
    return cart.save();
  }
}

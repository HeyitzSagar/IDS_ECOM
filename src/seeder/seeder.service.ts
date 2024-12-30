import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../products/products.schema';

@Injectable()
export class SeederService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async seedProducts(): Promise<void> {
    // const products = [
    //   { name: 'Product 1', description: 'Description for product 1', price: 100, stock: 10 },
    //   { name: 'Product 2', description: 'Description for product 2', price: 200, stock: 5 },
    //   { name: 'Product 3', description: 'Description for product 3', price: 300, stock: 8 },
    //   { name: 'Product 4', description: 'Description for product 4', price: 400, stock: 3 },
    //   { name: 'Product 5', description: 'Description for product 5', price: 500, stock: 2 },
    // ];

    // const count = await this.productModel.countDocuments();
    // if (count === 0) {
    //   await this.productModel.insertMany(products);
    //   console.log('Sample products seeded successfully');
    // } else {
    //   console.log('Products already exist in the database');
    // }
  }
}

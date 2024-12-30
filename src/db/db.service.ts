import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    console.log('Database connected:', this.connection.name);
  }

  async onModuleDestroy() {
    console.log('Closing database connection...');
    await this.connection.close();
  }

  async isConnected(): Promise<boolean> {
    return this.connection.readyState === 1; // 1 means connected
  }
}

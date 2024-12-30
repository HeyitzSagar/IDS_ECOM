import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { SeederService } from './seeder/seeder.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Automatically generate schema.gql file
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule {
  constructor(private readonly seederService: SeederService) {}

  // Seed data on application startup
  onModuleInit() {
    // this.seederService.seedProducts();
  }
}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { ProductCategoriesModule } from './modules/product-categories/product-categories.module';
import { ProductMeasurementsModule } from './modules/product-measurements/product-measurements.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { SuppliersBuysModule } from './modules/suppliers-buys/suppliers-buys.module';
import { SuppliersBuysProductsModule } from './modules/suppliers-buys-products/suppliers-buys-products.module';
import { ProductBatchesModule } from './modules/product-batches/product-batches.module';
import { ProductBatchActionsModule } from './modules/product-batch-actions/product-batch-actions.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    ProductCategoriesModule,
    ProductMeasurementsModule,
    SuppliersModule,
    SuppliersBuysModule,
    SuppliersBuysProductsModule,
    ProductBatchesModule,
    ProductBatchActionsModule,
  ],
  providers: [],
})
export class AppModule {}

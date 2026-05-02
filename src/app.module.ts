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
import { SuppliersBuysProductModule } from './modules/suppliers-buys-product/suppliers-buys-product.module';
import { SuppliersBuysProductsModule } from './modules/suppliers-buys-products/suppliers-buys-products.module';
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
    SuppliersBuysProductModule,
    SuppliersBuysProductsModule,
  ],
  providers: [],
})
export class AppModule {}

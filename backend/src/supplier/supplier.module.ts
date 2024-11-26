import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { supplierProviders } from './supplier.providers';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...supplierProviders, SupplierService],
  controllers: [SupplierController],
  exports: [SupplierService]
})
export class SupplierModule {}

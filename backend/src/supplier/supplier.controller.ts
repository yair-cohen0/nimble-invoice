import { Body, Controller, Get, Post } from '@nestjs/common';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Get('')
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Post('')
  create(@Body() supplier: Supplier): Promise<Supplier> {
    return this.supplierService.create(supplier);
  }
}

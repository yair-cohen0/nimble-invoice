import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { invoiceProviders } from './invoice.providers';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...invoiceProviders, InvoiceService],
  controllers: [InvoiceController],
  exports: [InvoiceService]
})
export class InvoiceModule {}

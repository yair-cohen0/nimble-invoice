import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import { Invoice } from './invoice.entity';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get('')
  findAll(@Query('withSupplier') withSupplier: string): Promise<Invoice[]> {
    return this.invoiceService.findAll(withSupplier === 'true');
  }

  @Post('')
  create(@Body() invoice: Invoice): Promise<Invoice> {
    return this.invoiceService.create(invoice);
  }

  @Get('amountsByStatus')
  amountsByStatus() {
    return this.invoiceService.amountsByStatus();
  }
}

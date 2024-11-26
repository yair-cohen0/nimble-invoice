import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { ConfigModule } from '@nestjs/config';
import { configs } from './config';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    InvoiceModule,
    ConfigModule.forRoot({
      load: Object.values(configs),
    }),
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

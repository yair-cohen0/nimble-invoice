import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Invoice} from './invoice.entity';

@Injectable()
export class InvoiceService {
    constructor(
        @Inject('INVOICE_REPOSITORY')
        private invoiceRepository: Repository<Invoice>,
    ) {
    }

    async findAll(withSupplier = false): Promise<Invoice[]> {
        const relations = [];
        if (withSupplier) {
            relations.push('supplier');
        }
        return this.invoiceRepository.find({relations});
    }

    async create(invoice: Invoice): Promise<Invoice> {
        return this.invoiceRepository.save(invoice);
    }

    async amountsByStatus(): Promise<Record<Invoice['status'], number>> {
        const result = await this.invoiceRepository
            .createQueryBuilder()
            .select('status')
            .addSelect('COUNT(*)', 'count')
            .groupBy('status')
            .getRawMany();

        return result.reduce((acc, curr) => {
            acc[curr.status] = Number(curr.count);
            return acc;
        }, {} as Record<Invoice['status'], number>);
    }

    async createMany(invoices: Invoice[]): Promise<Invoice[]> {
        return this.invoiceRepository.save(invoices);
    }
}

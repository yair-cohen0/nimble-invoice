import {Injectable} from '@nestjs/common';
import {Supplier} from "./supplier/supplier.entity";
import {Invoice} from "./invoice/invoice.entity";
import {CsvRow} from "./types";
import {SupplierService} from "./supplier/supplier.service";
import {InvoiceService} from "./invoice/invoice.service";
import {formatDate} from "./utils/date.util";

@Injectable()
export class AppService {

    constructor(private readonly supplierService: SupplierService, private readonly invoiceService: InvoiceService) {
    }


    public async insertResults(results: CsvRow[]): Promise<void> {
        const suppliers = [];
        const invoices = [];

        for (const row of results) {
            const supplier = this.mapToSupplier(row);
            const supplierExists = await this.supplierService.findOne([
                {internalId: supplier.internalId},
            ]);

            if (!supplierExists) {
                suppliers.push(supplier);
            }

            const invoice = this.mapToInvoice(row, supplier.internalId);
            invoices.push(invoice);
        }

        if (suppliers.length > 0) {
            await this.supplierService.createMany(suppliers);
        }
        await this.invoiceService.createMany(invoices);

    }

    private mapToSupplier(row: any): Supplier {
        return {
            internalId: row.supplier_internal_id,
            externalId: row.supplier_external_id,
            companyName: row.supplier_company_name,
            address: row.supplier_address,
            city: row.supplier_city,
            country: row.supplier_country,
            contactName: row.supplier_contact_name,
            phone: row.supplier_phone,
            email: row.supplier_email,
            bankCode: row.supplier_bank_code,
            bankBranchCode: row.supplier_bank_branch_code,
            bankAccountNumber: row.supplier_bank_account_number,
            status: row.supplier_status,
            stockValue: parseFloat(row.supplier_stock_value),
            withholdingTax: parseFloat(row.supplier_withholding_tax),
        } as Supplier;
    }

    private mapToInvoice(row: any, supplierId: string): Invoice {
        return {
            id: row.invoice_id,
            date: formatDate(row.invoice_date),
            dueDate: formatDate(row.invoice_due_date),
            cost: parseFloat(row.invoice_cost),
            currency: row.invoice_currency,
            status: row.invoice_status,
            supplier: {internalId: supplierId} as Supplier,
        } as Invoice;
    }
}

import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import {Invoice} from "../invoice/invoice.entity";

@Entity()
export class Supplier {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  internalId: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  externalId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  companyName: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  country: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  contactName: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  bankCode: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  bankBranchCode: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  bankAccountNumber: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  status: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  stockValue: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  withholdingTax: number;

  @OneToMany(() => Invoice, (invoice) => invoice.supplier)
  invoices: Invoice[];
}

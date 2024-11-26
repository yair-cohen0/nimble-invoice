import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Supplier } from '../supplier/supplier.entity';

@Entity()
export class Invoice {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'date', nullable: false })
  date: string;

  @Column({ type: 'date', nullable: false })
  dueDate: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  cost: number;

  @Column({ type: 'varchar', length: 3, nullable: false })
  currency: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  status: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.invoices, { nullable: false })
  supplier: Supplier;
}

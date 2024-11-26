import { DataSource } from 'typeorm';
import { Supplier } from './supplier.entity';

export const supplierProviders = [
  {
    provide: 'SUPPLIER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Supplier),
    inject: ['DATA_SOURCE'],
  },
];

import {Inject, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Supplier} from './supplier.entity';
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";

@Injectable()
export class SupplierService {
    constructor(
        @Inject('SUPPLIER_REPOSITORY')
        private supplierRepository: Repository<Supplier>,
    ) {
    }

    async findAll(): Promise<Supplier[]> {
        return this.supplierRepository.find();
    }


    async createMany(suppliers: Supplier[]): Promise<Supplier[]> {
        return this.supplierRepository.save(suppliers);
    }

    async findOne(conditions: FindOptionsWhere<Supplier>[]): Promise<Supplier | null> {
        return this.supplierRepository.findOneBy(conditions);
    }

    async create(invoice: Supplier): Promise<Supplier> {
        return this.supplierRepository.save(invoice);
    }
}

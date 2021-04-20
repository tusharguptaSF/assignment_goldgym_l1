import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Enquiry, EnquiryRelations} from '../models';

export class EnquiryRepository extends DefaultCrudRepository<
  Enquiry,
  typeof Enquiry.prototype.id,
  EnquiryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Enquiry, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Resolvedenquiries, ResolvedenquiriesRelations} from '../models';

export class ResolvedenquiriesRepository extends DefaultCrudRepository<
  Resolvedenquiries,
  typeof Resolvedenquiries.prototype.id,
  ResolvedenquiriesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Resolvedenquiries, dataSource);
  }
}

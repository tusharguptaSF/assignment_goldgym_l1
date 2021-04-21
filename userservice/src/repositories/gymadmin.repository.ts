import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Gymadmin, GymadminRelations} from '../models';

export class GymadminRepository extends DefaultCrudRepository<
  Gymadmin,
  typeof Gymadmin.prototype.id,
  GymadminRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Gymadmin, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {GymAdmin, GymAdminRelations} from '../models';

export class GymAdminRepository extends DefaultCrudRepository<
  GymAdmin,
  typeof GymAdmin.prototype.id,
  GymAdminRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(GymAdmin, dataSource);
  }
  async temp1(gymAdmin:GymAdmin) {
    let existing = await this.find({
      where: {
        username: gymAdmin.username
      }
    })
    if (existing.length == 0) {
      return null;
    }
    else return existing[0];
  }
}

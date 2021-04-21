import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Enrolledfitnessprograms, EnrolledfitnessprogramsRelations} from '../models';

export class EnrolledfitnessprogramsRepository extends DefaultCrudRepository<
  Enrolledfitnessprograms,
  typeof Enrolledfitnessprograms.prototype.id,
  EnrolledfitnessprogramsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Enrolledfitnessprograms, dataSource);
  }
}

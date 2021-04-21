import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Fitnessprograms, FitnessprogramsRelations} from '../models';

export class FitnessprogramsRepository extends DefaultCrudRepository<
  Fitnessprograms,
  typeof Fitnessprograms.prototype.id,
  FitnessprogramsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Fitnessprograms, dataSource);
  }
}

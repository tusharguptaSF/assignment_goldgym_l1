import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Marketingteam, MarketingteamRelations} from '../models';

export class MarketingteamRepository extends DefaultCrudRepository<
  Marketingteam,
  typeof Marketingteam.prototype.id,
  MarketingteamRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Marketingteam, dataSource);
  }
}

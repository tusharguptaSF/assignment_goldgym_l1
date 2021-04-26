import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {MarketingTeam, MarketingTeamRelations} from '../models';

export class MarketingTeamRepository extends DefaultCrudRepository<
  MarketingTeam,
  typeof MarketingTeam.prototype.id,
  MarketingTeamRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MarketingTeam, dataSource);
  }
  async temp1(marketingTeamMember : MarketingTeam) {
    let existing = await this.find({
      where: {
        username: marketingTeamMember.username
      }
    })
    if (existing.length == 0) {
      return null;
    }
    else return existing[0];
  }
}

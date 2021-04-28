import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Chat} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.user_id,
  UserRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(User, dataSource);
  }
  

  async temp1(chat:Chat) {
    let existing = await this.find({
      where: {
        username: chat.chat_p1
      }
    })
    if (existing.length == 0) {
      return null;
    }
    else return existing[0];
  }


  async temp2(chat:Chat) {
    let existing = await this.find({
      where: {
        username: chat.chat_p2
      }
    })
    if (existing.length == 0) {
      return null;
    }
    else return existing[0];
  }
}

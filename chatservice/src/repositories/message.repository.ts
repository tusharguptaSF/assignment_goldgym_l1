import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Message, MessageRelations} from '../models';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.msg_id,
  MessageRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Message, dataSource);
  }
}

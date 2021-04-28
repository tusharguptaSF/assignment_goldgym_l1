import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Chat, ChatRelations} from '../models';

export class ChatRepository extends DefaultCrudRepository<
  Chat,
  typeof Chat.prototype.chat_id,
  ChatRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Chat, dataSource);
  }

  

}

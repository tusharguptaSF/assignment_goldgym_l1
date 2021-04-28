import {Entity, model, property} from '@loopback/repository';

@model()
export class Message extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  msg_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  chat_id: number;

  @property({
    type: 'number',
  })
  msg_sender?: number;

  @property({
    type: 'number',
  })
  msg_receiver?: number;

  @property({
    type: 'string',
  })
  msg_content?: string;


  constructor(data?: Partial<Message>) {
    super(data);
  }
}

export interface MessageRelations {
  // describe navigational properties here
}

export type MessageWithRelations = Message & MessageRelations;

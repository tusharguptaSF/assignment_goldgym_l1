import {Entity, model, property} from '@loopback/repository';

@model()
export class Chat extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  chat_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  chat_p1: string;

  @property({
    type: 'string',
    required: true,
  })
  chat_p2: string;


  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Marketingteam extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<Marketingteam>) {
    super(data);
  }
}

export interface MarketingteamRelations {
  // describe navigational properties here
}

export type MarketingteamWithRelations = Marketingteam & MarketingteamRelations;

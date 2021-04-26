import {Entity, model, property} from '@loopback/repository';

@model()
export class MarketingTeam extends Entity {
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


  constructor(data?: Partial<MarketingTeam>) {
    super(data);
  }
}

export interface MarketingTeamRelations {
  // describe navigational properties here
}

export type MarketingTeamWithRelations = MarketingTeam & MarketingTeamRelations;

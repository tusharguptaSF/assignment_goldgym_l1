import {Entity, model, property} from '@loopback/repository';

@model()
export class Resolved extends Entity {
  @property({
    type: 'number',
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  marketingmemberid: number;

  @property({
    type: 'number',
    required: true,
  })
  enquiryid: number;


  constructor(data?: Partial<Resolved>) {
    super(data);
  }
}

export interface ResolvedRelations {
  // describe navigational properties here
}

export type ResolvedWithRelations = Resolved & ResolvedRelations;

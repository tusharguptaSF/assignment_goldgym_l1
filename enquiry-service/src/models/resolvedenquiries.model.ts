import {Entity, model, property} from '@loopback/repository';

@model()
export class Resolvedenquiries extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
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


  constructor(data?: Partial<Resolvedenquiries>) {
    super(data);
  }
}

export interface ResolvedenquiriesRelations {
  // describe navigational properties here
}

export type ResolvedenquiriesWithRelations = Resolvedenquiries & ResolvedenquiriesRelations;

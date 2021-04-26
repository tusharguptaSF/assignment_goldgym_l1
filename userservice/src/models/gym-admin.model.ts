import {Entity, model, property} from '@loopback/repository';

@model()
export class GymAdmin extends Entity {
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


  constructor(data?: Partial<GymAdmin>) {
    super(data);
  }
}

export interface GymAdminRelations {
  // describe navigational properties here
}

export type GymAdminWithRelations = GymAdmin & GymAdminRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Gymadmin extends Entity {
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


  constructor(data?: Partial<Gymadmin>) {
    super(data);
  }
}

export interface GymadminRelations {
  // describe navigational properties here
}

export type GymadminWithRelations = Gymadmin & GymadminRelations;

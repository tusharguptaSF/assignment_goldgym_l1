import {Entity, model, property} from '@loopback/repository';

@model()
export class Fitnessprograms extends Entity {
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
  ProgramName: string;

  @property({
    type: 'string',
    required: true,
  })
  ProgramLevel: string;

  @property({
    type: 'number',
    required: true,
  })
  TotalSessions: number;

  @property({
    type: 'number',
    required: true,
  })
  ProgramPrice: number;


  constructor(data?: Partial<Fitnessprograms>) {
    super(data);
  }
}

export interface FitnessprogramsRelations {
  // describe navigational properties here
}

export type FitnessprogramsWithRelations = Fitnessprograms & FitnessprogramsRelations;

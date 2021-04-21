import {Entity, model, property} from '@loopback/repository';

@model()
export class Enrolledfitnessprograms extends Entity {
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
  customerId: number;

  @property({
    type: 'number',
    required: true,
  })
  programId: number;

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


  constructor(data?: Partial<Enrolledfitnessprograms>) {
    super(data);
  }
}

export interface EnrolledfitnessprogramsRelations {
  // describe navigational properties here
}

export type EnrolledfitnessprogramsWithRelations = Enrolledfitnessprograms & EnrolledfitnessprogramsRelations;

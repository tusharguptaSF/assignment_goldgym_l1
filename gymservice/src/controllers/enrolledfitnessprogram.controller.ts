import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Enrolledfitnessprograms} from '../models';
import {EnrolledfitnessprogramsRepository} from '../repositories';

export class EnrolledfitnessprogramController {
  constructor(
    @repository(EnrolledfitnessprogramsRepository)
    public enrolledfitnessprogramsRepository : EnrolledfitnessprogramsRepository,
  ) {}

  @post('/enrolledfitnessprograms')
  @response(200, {
    description: 'Enrolledfitnessprograms model instance',
    content: {'application/json': {schema: getModelSchemaRef(Enrolledfitnessprograms)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Enrolledfitnessprograms, {
            title: 'NewEnrolledfitnessprograms',
            exclude: ['id'],
          }),
        },
      },
    })
    enrolledfitnessprograms: Omit<Enrolledfitnessprograms, 'id'>,
  ): Promise<Enrolledfitnessprograms> {
    return this.enrolledfitnessprogramsRepository.create(enrolledfitnessprograms);
  }

  @get('/enrolledfitnessprograms/count')
  @response(200, {
    description: 'Enrolledfitnessprograms model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Enrolledfitnessprograms) where?: Where<Enrolledfitnessprograms>,
  ): Promise<Count> {
    return this.enrolledfitnessprogramsRepository.count(where);
  }

  @get('/enrolledfitnessprograms')
  @response(200, {
    description: 'Array of Enrolledfitnessprograms model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Enrolledfitnessprograms, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Enrolledfitnessprograms) filter?: Filter<Enrolledfitnessprograms>,
  ): Promise<Enrolledfitnessprograms[]> {
    return this.enrolledfitnessprogramsRepository.find(filter);
  }

  @patch('/enrolledfitnessprograms')
  @response(200, {
    description: 'Enrolledfitnessprograms PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Enrolledfitnessprograms, {partial: true}),
        },
      },
    })
    enrolledfitnessprograms: Enrolledfitnessprograms,
    @param.where(Enrolledfitnessprograms) where?: Where<Enrolledfitnessprograms>,
  ): Promise<Count> {
    return this.enrolledfitnessprogramsRepository.updateAll(enrolledfitnessprograms, where);
  }

  @get('/enrolledfitnessprograms/{id}')
  @response(200, {
    description: 'Enrolledfitnessprograms model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Enrolledfitnessprograms, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Enrolledfitnessprograms, {exclude: 'where'}) filter?: FilterExcludingWhere<Enrolledfitnessprograms>
  ): Promise<Enrolledfitnessprograms> {
    return this.enrolledfitnessprogramsRepository.findById(id, filter);
  }

  @patch('/enrolledfitnessprograms/{id}')
  @response(204, {
    description: 'Enrolledfitnessprograms PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Enrolledfitnessprograms, {partial: true}),
        },
      },
    })
    enrolledfitnessprograms: Enrolledfitnessprograms,
  ): Promise<void> {
    await this.enrolledfitnessprogramsRepository.updateById(id, enrolledfitnessprograms);
  }

  @put('/enrolledfitnessprograms/{id}')
  @response(204, {
    description: 'Enrolledfitnessprograms PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() enrolledfitnessprograms: Enrolledfitnessprograms,
  ): Promise<void> {
    await this.enrolledfitnessprogramsRepository.replaceById(id, enrolledfitnessprograms);
  }

  @del('/enrolledfitnessprograms/{id}')
  @response(204, {
    description: 'Enrolledfitnessprograms DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.enrolledfitnessprogramsRepository.deleteById(id);
  }
}

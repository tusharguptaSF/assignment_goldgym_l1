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
import {Fitnessprograms} from '../models';
import {FitnessprogramsRepository} from '../repositories';

export class FitnessprogramsController {
  constructor(
    @repository(FitnessprogramsRepository)
    public fitnessprogramsRepository : FitnessprogramsRepository,
  ) {}

  @post('/fitnessprograms')
  @response(200, {
    description: 'Fitnessprograms model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fitnessprograms)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fitnessprograms, {
            title: 'NewFitnessprograms',
            exclude: ['id'],
          }),
        },
      },
    })
    fitnessprograms: Omit<Fitnessprograms, 'id'>,
  ): Promise<Fitnessprograms> {
    return this.fitnessprogramsRepository.create(fitnessprograms);
  }

  @get('/fitnessprograms/count')
  @response(200, {
    description: 'Fitnessprograms model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fitnessprograms) where?: Where<Fitnessprograms>,
  ): Promise<Count> {
    return this.fitnessprogramsRepository.count(where);
  }

  @get('/fitnessprograms')
  @response(200, {
    description: 'Array of Fitnessprograms model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fitnessprograms, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fitnessprograms) filter?: Filter<Fitnessprograms>,
  ): Promise<Fitnessprograms[]> {
    return this.fitnessprogramsRepository.find(filter);
  }

  @patch('/fitnessprograms')
  @response(200, {
    description: 'Fitnessprograms PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fitnessprograms, {partial: true}),
        },
      },
    })
    fitnessprograms: Fitnessprograms,
    @param.where(Fitnessprograms) where?: Where<Fitnessprograms>,
  ): Promise<Count> {
    return this.fitnessprogramsRepository.updateAll(fitnessprograms, where);
  }

  @get('/fitnessprograms/{id}')
  @response(200, {
    description: 'Fitnessprograms model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fitnessprograms, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Fitnessprograms, {exclude: 'where'}) filter?: FilterExcludingWhere<Fitnessprograms>
  ): Promise<Fitnessprograms> {
    return this.fitnessprogramsRepository.findById(id, filter);
  }

  @patch('/fitnessprograms/{id}')
  @response(204, {
    description: 'Fitnessprograms PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fitnessprograms, {partial: true}),
        },
      },
    })
    fitnessprograms: Fitnessprograms,
  ): Promise<void> {
    await this.fitnessprogramsRepository.updateById(id, fitnessprograms);
  }

  @put('/fitnessprograms/{id}')
  @response(204, {
    description: 'Fitnessprograms PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fitnessprograms: Fitnessprograms,
  ): Promise<void> {
    await this.fitnessprogramsRepository.replaceById(id, fitnessprograms);
  }

  @del('/fitnessprograms/{id}')
  @response(204, {
    description: 'Fitnessprograms DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fitnessprogramsRepository.deleteById(id);
  }
}

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
import {Resolved} from '../models';
import {EnquiryRepository} from '../repositories';

export class ResolvedController {
  constructor(
    @repository(EnquiryRepository)
    public enquiryRepository : EnquiryRepository,
  ) {}

  @post('/resolveds')
  @response(200, {
    description: 'Resolved model instance',
    content: {'application/json': {schema: getModelSchemaRef(Resolved)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Resolved, {
            title: 'NewResolved',
            exclude: ['id'],
          }),
        },
      },
    })
    resolved: Omit<Resolved, 'id'>,
  ): Promise<Resolved> {
    return this.enquiryRepository.create(resolved);
  }

  @get('/resolveds/count')
  @response(200, {
    description: 'Resolved model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Resolved) where?: Where<Resolved>,
  ): Promise<Count> {
    return this.enquiryRepository.count(where);
  }

  @get('/resolveds')
  @response(200, {
    description: 'Array of Resolved model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Resolved, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Resolved) filter?: Filter<Resolved>,
  ): Promise<Resolved[]> {
    return this.enquiryRepository.find(filter);
  }

  @patch('/resolveds')
  @response(200, {
    description: 'Resolved PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Resolved, {partial: true}),
        },
      },
    })
    resolved: Resolved,
    @param.where(Resolved) where?: Where<Resolved>,
  ): Promise<Count> {
    return this.enquiryRepository.updateAll(resolved, where);
  }

  @get('/resolveds/{id}')
  @response(200, {
    description: 'Resolved model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Resolved, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Resolved, {exclude: 'where'}) filter?: FilterExcludingWhere<Resolved>
  ): Promise<Resolved> {
    return this.enquiryRepository.findById(id, filter);
  }

  @patch('/resolveds/{id}')
  @response(204, {
    description: 'Resolved PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Resolved, {partial: true}),
        },
      },
    })
    resolved: Resolved,
  ): Promise<void> {
    await this.enquiryRepository.updateById(id, resolved);
  }

  @put('/resolveds/{id}')
  @response(204, {
    description: 'Resolved PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() resolved: Resolved,
  ): Promise<void> {
    await this.enquiryRepository.replaceById(id, resolved);
  }

  @del('/resolveds/{id}')
  @response(204, {
    description: 'Resolved DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.enquiryRepository.deleteById(id);
  }
}

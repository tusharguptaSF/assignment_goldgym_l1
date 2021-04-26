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
import {Resolvedenquiries} from '../models';
import {ResolvedenquiriesRepository} from '../repositories';

export class ResolvedEnquiryController {
  constructor(
    @repository(ResolvedenquiriesRepository)
    public resolvedenquiriesRepository : ResolvedenquiriesRepository,
  ) {}

  @post('/resolvedenquiries')
  @response(200, {
    description: 'Resolvedenquiries model instance',
    content: {'application/json': {schema: getModelSchemaRef(Resolvedenquiries)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Resolvedenquiries, {
            title: 'NewResolvedenquiries',
            exclude: ['id'],
          }),
        },
      },
    })
    resolvedenquiries: Omit<Resolvedenquiries, 'id'>,
  ): Promise<Resolvedenquiries> {
    return this.resolvedenquiriesRepository.create(resolvedenquiries);
  }

  @get('/resolvedenquiries/count')
  @response(200, {
    description: 'Resolvedenquiries model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Resolvedenquiries) where?: Where<Resolvedenquiries>,
  ): Promise<Count> {
    return this.resolvedenquiriesRepository.count(where);
  }

  @get('/resolvedenquiries')
  @response(200, {
    description: 'Array of Resolvedenquiries model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Resolvedenquiries, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Resolvedenquiries) filter?: Filter<Resolvedenquiries>,
  ): Promise<Resolvedenquiries[]> {
    return this.resolvedenquiriesRepository.find(filter);
  }

  @patch('/resolvedenquiries')
  @response(200, {
    description: 'Resolvedenquiries PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Resolvedenquiries, {partial: true}),
        },
      },
    })
    resolvedenquiries: Resolvedenquiries,
    @param.where(Resolvedenquiries) where?: Where<Resolvedenquiries>,
  ): Promise<Count> {
    return this.resolvedenquiriesRepository.updateAll(resolvedenquiries, where);
  }

  @get('/resolvedenquiries/{id}')
  @response(200, {
    description: 'Resolvedenquiries model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Resolvedenquiries, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Resolvedenquiries, {exclude: 'where'}) filter?: FilterExcludingWhere<Resolvedenquiries>
  ): Promise<Resolvedenquiries> {
    return this.resolvedenquiriesRepository.findById(id, filter);
  }

  @patch('/resolvedenquiries/{id}')
  @response(204, {
    description: 'Resolvedenquiries PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Resolvedenquiries, {partial: true}),
        },
      },
    })
    resolvedenquiries: Resolvedenquiries,
  ): Promise<void> {
    await this.resolvedenquiriesRepository.updateById(id, resolvedenquiries);
  }

  @put('/resolvedenquiries/{id}')
  @response(204, {
    description: 'Resolvedenquiries PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() resolvedenquiries: Resolvedenquiries,
  ): Promise<void> {
    await this.resolvedenquiriesRepository.replaceById(id, resolvedenquiries);
  }

  @del('/resolvedenquiries/{id}')
  @response(204, {
    description: 'Resolvedenquiries DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.resolvedenquiriesRepository.deleteById(id);
  }
}

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
import {Gymadmin} from '../models';
import {GymadminRepository} from '../repositories';

export class GymadminController {
  constructor(
    @repository(GymadminRepository)
    public gymadminRepository : GymadminRepository,
  ) {}

  @post('/gymadmins')
  @response(200, {
    description: 'Gymadmin model instance',
    content: {'application/json': {schema: getModelSchemaRef(Gymadmin)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gymadmin, {
            title: 'NewGymadmin',
            exclude: ['id'],
          }),
        },
      },
    })
    gymadmin: Omit<Gymadmin, 'id'>,
  ): Promise<Gymadmin> {
    return this.gymadminRepository.create(gymadmin);
  }

  @get('/gymadmins/count')
  @response(200, {
    description: 'Gymadmin model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Gymadmin) where?: Where<Gymadmin>,
  ): Promise<Count> {
    return this.gymadminRepository.count(where);
  }

  @get('/gymadmins')
  @response(200, {
    description: 'Array of Gymadmin model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gymadmin, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Gymadmin) filter?: Filter<Gymadmin>,
  ): Promise<Gymadmin[]> {
    return this.gymadminRepository.find(filter);
  }

  @patch('/gymadmins')
  @response(200, {
    description: 'Gymadmin PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gymadmin, {partial: true}),
        },
      },
    })
    gymadmin: Gymadmin,
    @param.where(Gymadmin) where?: Where<Gymadmin>,
  ): Promise<Count> {
    return this.gymadminRepository.updateAll(gymadmin, where);
  }

  @get('/gymadmins/{id}')
  @response(200, {
    description: 'Gymadmin model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gymadmin, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Gymadmin, {exclude: 'where'}) filter?: FilterExcludingWhere<Gymadmin>
  ): Promise<Gymadmin> {
    return this.gymadminRepository.findById(id, filter);
  }

  @patch('/gymadmins/{id}')
  @response(204, {
    description: 'Gymadmin PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gymadmin, {partial: true}),
        },
      },
    })
    gymadmin: Gymadmin,
  ): Promise<void> {
    await this.gymadminRepository.updateById(id, gymadmin);
  }

  @put('/gymadmins/{id}')
  @response(204, {
    description: 'Gymadmin PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gymadmin: Gymadmin,
  ): Promise<void> {
    await this.gymadminRepository.replaceById(id, gymadmin);
  }

  @del('/gymadmins/{id}')
  @response(204, {
    description: 'Gymadmin DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gymadminRepository.deleteById(id);
  }
}

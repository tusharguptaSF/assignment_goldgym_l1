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
import {Marketingteam} from '../models';
import {MarketingteamRepository} from '../repositories';

export class MarketingteamController {
  constructor(
    @repository(MarketingteamRepository)
    public marketingteamRepository : MarketingteamRepository,
  ) {}

  @post('/marketingteams')
  @response(200, {
    description: 'Marketingteam model instance',
    content: {'application/json': {schema: getModelSchemaRef(Marketingteam)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marketingteam, {
            title: 'NewMarketingteam',
            exclude: ['id'],
          }),
        },
      },
    })
    marketingteam: Omit<Marketingteam, 'id'>,
  ): Promise<Marketingteam> {
    return this.marketingteamRepository.create(marketingteam);
  }

  @get('/marketingteams/count')
  @response(200, {
    description: 'Marketingteam model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Marketingteam) where?: Where<Marketingteam>,
  ): Promise<Count> {
    return this.marketingteamRepository.count(where);
  }

  @get('/marketingteams')
  @response(200, {
    description: 'Array of Marketingteam model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Marketingteam, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Marketingteam) filter?: Filter<Marketingteam>,
  ): Promise<Marketingteam[]> {
    return this.marketingteamRepository.find(filter);
  }

  @patch('/marketingteams')
  @response(200, {
    description: 'Marketingteam PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marketingteam, {partial: true}),
        },
      },
    })
    marketingteam: Marketingteam,
    @param.where(Marketingteam) where?: Where<Marketingteam>,
  ): Promise<Count> {
    return this.marketingteamRepository.updateAll(marketingteam, where);
  }

  @get('/marketingteams/{id}')
  @response(200, {
    description: 'Marketingteam model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Marketingteam, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Marketingteam, {exclude: 'where'}) filter?: FilterExcludingWhere<Marketingteam>
  ): Promise<Marketingteam> {
    return this.marketingteamRepository.findById(id, filter);
  }

  @patch('/marketingteams/{id}')
  @response(204, {
    description: 'Marketingteam PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marketingteam, {partial: true}),
        },
      },
    })
    marketingteam: Marketingteam,
  ): Promise<void> {
    await this.marketingteamRepository.updateById(id, marketingteam);
  }

  @put('/marketingteams/{id}')
  @response(204, {
    description: 'Marketingteam PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() marketingteam: Marketingteam,
  ): Promise<void> {
    await this.marketingteamRepository.replaceById(id, marketingteam);
  }

  @del('/marketingteams/{id}')
  @response(204, {
    description: 'Marketingteam DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.marketingteamRepository.deleteById(id);
  }
}

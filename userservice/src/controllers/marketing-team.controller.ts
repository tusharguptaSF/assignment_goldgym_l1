// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, post, Request, requestBody, response, RestBindings} from '@loopback/rest';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import {SecretKeys} from '../config/auth.config';
import {MarketingTeam} from '../models';
import {CustomerRepository, GymAdminRepository, MarketingTeamRepository} from '../repositories';

let keys = new SecretKeys();
// import {inject} from '@loopback/core';

export class MarketingTeamController {
  constructor(@repository(MarketingTeamRepository) public MarketingTeamRepository: MarketingTeamRepository,
              @repository(GymAdminRepository) public GymAdminRepository: GymAdminRepository,
              @repository(CustomerRepository) public CustomerRepository: CustomerRepository,
              @inject(RestBindings.Http.REQUEST) private request: Request) { }

  @post('/marketingteam/signup')
  @response(200, {
    description: "Marketing Team Instance",
    content: {
      'application/json': {
      schema : getModelSchemaRef(MarketingTeam)
    }}
  })
  async signup(@requestBody({
    content: {
      'application/json': {
        schema : getModelSchemaRef(MarketingTeam)
      }
    }
  }) MarketingTeamMember: MarketingTeam) {
    let usernameNot = await (this.MarketingTeamRepository.temp1(MarketingTeamMember))
    if (usernameNot != null) {
      return {"message": "Username is already used"}
    }
    MarketingTeamMember.password = bcrypt.hashSync(MarketingTeamMember.password, 8);
    return this.MarketingTeamRepository.create(MarketingTeamMember);
  }



  @post('/marketingteam/login')
  @response(200, {
    description: "Marketing Team Instance",
    content : getModelSchemaRef(MarketingTeam)
  })
  async login(@requestBody({
    content: {
      'application/json': {
        schema : getModelSchemaRef(MarketingTeam)
      }
    }
  }) MarketingTeamMember: MarketingTeam) : Promise<any>  {
    let existingMarketingTeamMember = await this.MarketingTeamRepository.temp1(MarketingTeamMember);

    if (existingMarketingTeamMember != null) {
      let isPasswordValid = bcrypt.compareSync(MarketingTeamMember.password, existingMarketingTeamMember.password);
      if (isPasswordValid) {
        let token = jwt.sign({id: existingMarketingTeamMember.id}, keys.getMarketingTeamKey(), {expiresIn: 84600});
        console.log(token);
        return {"id" : existingMarketingTeamMember.id , "message": "User authorized" , "token" : token}
      }
      else {
        return {"message": "Password is invalid"}
      }
    }
    return {"message" : "User unauthorized"}
  }

}

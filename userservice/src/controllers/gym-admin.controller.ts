// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import { get, getModelSchemaRef, post, Request, requestBody, response, RestBindings } from '@loopback/rest';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { SecretKeys } from '../config/auth.config';
import { GymAdmin } from '../models';
import { CustomerRepository, GymAdminRepository, MarketingTeamRepository } from '../repositories';
let keys = new SecretKeys();
// import {inject} from '@loopback/core';


export class GymAdminController {
  constructor(@repository(CustomerRepository) public customerRepository: CustomerRepository,
    @repository(GymAdminRepository) public gymAdminRepository: GymAdminRepository,
    @repository(MarketingTeamRepository) public marketingTeamRepository: MarketingTeamRepository,
    @inject(RestBindings.Http.REQUEST) private request: Request) { }


  @post('/gymAdmin/signup')
  @response(200, {
    description: "Gym Admin Instance",
    schema: getModelSchemaRef(GymAdmin)
  })
  async signup(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(GymAdmin)
      }
    }
  }) gymAdmin: GymAdmin): Promise<any> {
    let usernameNot = await (this.gymAdminRepository.temp1(gymAdmin));
    if (usernameNot != null) {
      return { "message": "Username is already used" };
    }
    gymAdmin.password = bcrypt.hashSync(gymAdmin.password, 8);
    return this.gymAdminRepository.create(gymAdmin);

  }


  @post('/gymAdmin/login')
  @response(200, {
    description: "Gym Admin Instance",
    content: { 'application/json': { schema: getModelSchemaRef(GymAdmin) } }
  })
  async login(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(GymAdmin)
      }
    }
  }) GymAdmin: GymAdmin): Promise<any> {
    let checkingAdmin = await this.gymAdminRepository.find({
      where: {
        username: GymAdmin.username
      }
    })
    if (checkingAdmin.length == 0) {
      return { "message": "Invalid Username" };
    }
    let isPasswordValid = bcrypt.compareSync(GymAdmin.password, checkingAdmin[0].password);
    if (isPasswordValid) {

      let token = jwt.sign({ id: checkingAdmin[0].id }, keys.getAdminKey(), { expiresIn: 84600 });
      console.log(token);
      return { "id": checkingAdmin[0].id, "message": "User authorized", "token": token }
    }
    else return { "message": "Invalid Password" }
  }




}

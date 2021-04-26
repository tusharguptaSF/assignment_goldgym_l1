// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, post, Request, requestBody, response, RestBindings} from '@loopback/rest';
import * as bcrtypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import {Context} from 'vm';
import {SecretKeys} from '../config/auth.config';
import {Customer} from '../models';
import {CustomerRepository, GymAdminRepository, MarketingTeamRepository} from '../repositories';
let keys = new SecretKeys();

export class CustomerController {
  constructor(@repository(CustomerRepository) public customerRepository: CustomerRepository,
              @repository(GymAdminRepository) public gymAdminRepository: GymAdminRepository,
              @repository(MarketingTeamRepository) public marketingTeamRepository: MarketingTeamRepository,
              @inject(RestBindings.Http.REQUEST) private request: Request,
              @inject('sysdate') private Sysdate : Context) { }
  @post('/customers/signup')
  @response(200, {
    description: 'Customer instance',
    content : {'application/json': {schema : getModelSchemaRef(Customer)}}
  })

  async signup(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer)
        }
      }
    })
    customer : Customer
  ): Promise<Customer | Object>{
    let usernameNot = await (this.customerRepository.temp1(customer));
    if (usernameNot != null) {
      return {"message" : "Username is already used"}
    }
    customer.password = bcrtypt.hashSync(customer.password, 8); //salt length
    return this.customerRepository.create(customer);
  }


  @post('/customers/login')
  @response(200, {
    description: "Customer Instance",
    content: {'application/json' : {schema  : getModelSchemaRef(Customer)}}
  })
  async login(@requestBody({
    content : {
    'application/json': {
        schema : getModelSchemaRef(Customer)
      }
    }
  }) customer: Customer): Promise<any> {
    console.log(this.Sysdate);


    let checkingCustomer = await this.customerRepository.temp1(customer);
    if (checkingCustomer == null) {
      return {"message":"Invalid Username"}
    }
    if (checkingCustomer != null) {

      let isPasswordValid = bcrtypt.compareSync(customer.password, checkingCustomer.password);
      if (isPasswordValid) {
        let token = jwt.sign({id: checkingCustomer.id},keys.getCustomerKey(), {expiresIn: 84600});
        return {"id" : checkingCustomer.id , "message": "User Authorized", "token" : token , "User logged in at" : this.Sysdate}

      }
      else {
        return {"message" : "Invalid password"}
      }



    }


  }



}

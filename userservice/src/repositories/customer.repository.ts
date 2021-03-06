import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Customer, dataSource);
  }
  async temp1(customer:Customer) {
    let existing = await this.find({
      where: {
        username: customer.username
      }
    })
    //promise of an array of records found
    if (existing.length == 0) {
      return null;
    }
    else return existing[0]; 
  }
}

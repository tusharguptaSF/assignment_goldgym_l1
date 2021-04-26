export class SecretKeys {
  private customerKey:string = "customer-secret-key"
  private adminKey:string =  "admin-secret-key"
  private marketingTeamKey: string = "marketingteam-secret-key"
  getCustomerKey() {
    return this.customerKey;
  }
  getAdminKey() {
    return this.adminKey;
  }
  getMarketingTeamKey() {
    return this.marketingTeamKey;
  }
}

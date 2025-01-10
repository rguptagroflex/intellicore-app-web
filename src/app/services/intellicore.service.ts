import {
  request,
  login,
  logout,
  getEntitlementByEmail,
  createEntitlement,
  sendEmailOtp,
  verifyEmailOtp,
  getCounteriesWithStates,
} from "../helpers/request";

class IntellicoreService {
  public request: typeof request;
  public login: typeof login;
  public logout: typeof logout;
  public getEntitlementByEmail: typeof getEntitlementByEmail;
  public createEntitlement: typeof createEntitlement;
  public sendEmailOtp: typeof sendEmailOtp;
  public verifyEmailOtp: typeof verifyEmailOtp;
  public getCounteriesWithStates: typeof getCounteriesWithStates;

  constructor() {
    this.request = request;
    this.login = login;
    this.logout = logout;
    this.getEntitlementByEmail = getEntitlementByEmail;
    this.createEntitlement = createEntitlement;
    this.sendEmailOtp = sendEmailOtp;
    this.verifyEmailOtp = verifyEmailOtp;
    this.getCounteriesWithStates = getCounteriesWithStates;
  }
}

export default new IntellicoreService();

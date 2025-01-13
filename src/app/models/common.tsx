export interface Country {
  id: number;
  countryName: string;
  countryCode: number;
  continent: string;
  countryTax: string;
  taxCategory: string;
  currency: string;
  taxRegulation: string;
  countryIso2: string;
  countryIso3: string;
  countryStateDetails: Array<State>;
}

export interface State {
  id: string;
  stateCode: number;
  stateName: string;
  countryId: number;
  countryCode: string;
  stateTax: string;
}

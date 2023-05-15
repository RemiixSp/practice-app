import { Status } from '../utilTypes';

export interface IpType {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
}

export interface ipState {
  ipInfo: IpType;
  status: Status;
  errorMsg: string;
}

export type getIpParams = {
  ip: string;
};

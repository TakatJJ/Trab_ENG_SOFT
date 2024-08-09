import { AdvertisementRESPONSE } from './Advertisement/AdvertisementRESPONSE';
import { UserLogged } from './User/UserLogged';

export default interface Notification {
  LocatarioID: number;
  State: string;
  Room: AdvertisementRESPONSE;
}

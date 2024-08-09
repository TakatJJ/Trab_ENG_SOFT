import { AdvertisementRESPONSE } from './Advertisement/AdvertisementRESPONSE';
import { UserLogged } from './User/UserLogged';

export default interface Notification {
  id: number;
  LocatarioID: number;
  State: string;
  Room: AdvertisementRESPONSE;
}

import { AdvertisementRESPONSE } from './AdvertisementRESPONSE';
import { UserLogged } from './UserLogged';

export default interface Notification {
  LocatarioID: string;
  State: string;
  Room: AdvertisementRESPONSE;
}

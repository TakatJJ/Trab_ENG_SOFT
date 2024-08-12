import { AdvertisementRESPONSE } from '../Advertisement/AdvertisementRESPONSE';
import { UserRenter } from '../User/UserRenter';

export default interface Proposta {
  id: number;
  Locatario: UserRenter;
  State: string;
  Room: AdvertisementRESPONSE;
}

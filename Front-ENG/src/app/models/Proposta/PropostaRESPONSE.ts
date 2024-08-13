import { AdvertisementRESPONSE } from '../Advertisement/AdvertisementRESPONSE';
import { UserRenter } from '../User/UserRenter';

export interface PropostaRESPONSE {
  id: number;
  locatario: UserRenter;
  state: string;
  room: AdvertisementRESPONSE;
}

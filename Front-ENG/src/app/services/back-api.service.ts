import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth-service.service';
import { LocalStorageService } from './local-storage.service';
import { Advertisement } from '../models/Advertisement';
import { RegisterUser } from '../models/RegisterUser';
import { UserLogin } from '../models/UserLogin';
import { RoomOptions } from '../models/RoomOptions';
import { FormGroup } from '@angular/forms';
import { MockResponsesService } from './mock-responses.service';

@Injectable({
  providedIn: 'root',
})
export class BackAPIService {
  authStatus: AuthService;
  storage: LocalStorageService;
  listOfRooms$: BehaviorSubject<Advertisement[]> = new BehaviorSubject<
    Advertisement[]
  >(new Array<Advertisement>());
  listOfRoomsObserver = this.listOfRooms$.asObservable();

  constructor(
    public http: HttpClient,
    private authService: AuthService,
    private LocalStorage: LocalStorageService,
    private mockData: MockResponsesService
  ) {
    this.authStatus = authService;
    this.storage = LocalStorage;
  }

  public GETLoginResponse(user: UserLogin) {
    this.storage.set('matricula', user.getID());
    this.authService.login();
    // this.http.get('TuaURLAQui').subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
  public POSTRegisterUser(newUser: RegisterUser) {
    this.http.post('TuaURLAQui', newUser).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public POSTCreateAd(AdvertisementForm: FormGroup, fotos: Array<File>) {
    // console.log(fotos);
    // console.log(AdvertisementForm);
    const ad = new Advertisement(
      AdvertisementForm.get('title')!.value,
      AdvertisementForm.get('description')!.value,
      AdvertisementForm.get('price')!.value,
      AdvertisementForm.get('location')!.value,
      AdvertisementForm.get('numberOfRooms')!.value,
      this.storage.get('matricula')
      // fotos
    );
    this.http.post('http://localhost:5121/api/Test', ad).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public GETSearchRooms(roomOptions: RoomOptions): Array<Advertisement> {
    // this.http
    //   .get(
    //     `TuaURLAqui/?campus=${roomOptions.campus}&maxprice=${roomOptions.maxPrice}
    // &minprice=${roomOptions.minPrice}&numberofroommates=${roomOptions.numberOfRoommates}&sameGender=${roomOptions.sameGender}`
    //   )
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    this.listOfRooms$.next(
      JSON.parse(this.mockData.getRoomData()) as Array<Advertisement>
    );
    return JSON.parse(this.mockData.getRoomData()) as Array<Advertisement>;
  }
}

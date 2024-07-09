import { FormGroup } from '@angular/forms';

export class RoomOptions {
  campus: string;
  minPrice: number;
  maxPrice: number;
  numberOfRoommates: number;
  sameGender: boolean;
  constructor(FormGroup: FormGroup) {
    this.campus = FormGroup.value.campus;
    this.minPrice = FormGroup.value.minPrice;
    this.maxPrice = FormGroup.value.maxPrice;
    this.numberOfRoommates = FormGroup.value.numberOfRoommates;
    this.sameGender = FormGroup.value.sameGender;
  }
}

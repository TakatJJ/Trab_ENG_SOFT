export class RoomOptions {
  campus: string;
  minPrice: number;
  maxPrice: number;
  numberOfRoommates: number;
  sameGender: boolean;
  constructor(data: any) {
    this.campus = data.campus;
    this.minPrice = data.minPrice;
    this.maxPrice = data.maxPrice;
    this.numberOfRoommates = data.numberOfRoommates;
    this.sameGender = data.sameGender;
  }
}

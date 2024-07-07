import { Injectable, StateKey, TransferState } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage : TransferState;
  constructor() 
  {
    this.storage = new TransferState();
  }

  set (key:StateKey<string>, value:any) : boolean
  {
    if (this.storage)
    {
      this.storage.set(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
  
  get (key:StateKey<string>) : any
  {
    if (this.storage)
    {
      let value = this.storage.get(key, null);
      if (value)
      {
        return JSON.parse(value);
      }
    }
    return null;
  }

  remove (key:StateKey<string>) : boolean
  {
    if (this.storage)
    {
      this.storage.remove(key);
      return true;
    }
    return false;
  }
}

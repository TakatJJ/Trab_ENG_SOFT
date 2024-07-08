import { Injectable, StateKey, TransferState, makeStateKey } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage : TransferState;
  constructor() 
  {
    this.storage = new TransferState();
    console.log("LocalStorageService initialized")
  }

  set (key:string, value:any) : boolean
  {
    if (this.storage)
    {
      this.storage.set(makeStateKey<string>(key), JSON.stringify(value));
      return true;
    }
    return false;
  }
  
  get (key:string) : any
  {
    if (this.storage)
    {
      let value = this.storage.get(makeStateKey(key), null);
      if (value)
      {
        return JSON.parse(value);
      }
    }
    return null;
  }

  remove (key:string) : boolean
  {
    if (this.storage)
    {
      this.storage.remove(makeStateKey(key));
      return true;
    }
    return false;
  }
}

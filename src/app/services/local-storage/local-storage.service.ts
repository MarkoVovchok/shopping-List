import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  save<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  load<T>(key: string): T {
    let data = localStorage.getItem(key);
    return data && JSON.parse(data);
  }
}

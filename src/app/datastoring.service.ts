import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DatastoringService {
  storealldata:any[]=[];
  emitter: EventEmitter<any> = new EventEmitter();
  constructor() { }
}

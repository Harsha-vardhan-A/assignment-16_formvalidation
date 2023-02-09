import { Component } from '@angular/core';
import { DatastoringService } from '../datastoring.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  getdetails:any[]=[];
  //subscribing the data
  constructor(private data:DatastoringService){
    
    this.data.emitter.subscribe((res)=>{
      console.log(res);
      this.getdetails.push(res)
    })
  }
}

import { Component ,EventEmitter,OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { DatastoringService } from './datastoring.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  childdata:string=""  //storing child data
  title = 'forms';

  constructor(private emitdata: DatastoringService, private route:ActivatedRoute,private router:Router){

  }
  // ngOnInit(): void {
    // adding validations
    registrationform = new FormGroup({
      firstname: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
        Validators.pattern("^[a-zA-Z]+")
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.maxLength(256),
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z ]+")
      ]),
      age: new FormControl('',[
        Validators.required,
        Validators.max(999),
        Validators.min(1),
        // Validators.pattern("^[0-9]+")
      ]),
      username: new FormControl('',[
        Validators.required,
        Validators.maxLength(256),
        Validators.minLength(3),
        Validators.pattern("^[a-zA-Z]+[a-zA-Z0-9.-_@$]+")
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.maxLength(256),
        Validators.minLength(10),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      phonenumber: new FormControl('',[
        Validators.required,
        Validators.max(9999999999),
        Validators.min(1000000000),
        Validators.pattern("^[0-9]+")
      ]),
      additionaldata: new FormControl('',[
        // Validators.required,
        
        Validators.pattern("^[a-zA-Z][a-zA-Z0-9@#$%^&*(){}]+$")
      ])

    });
  // }

  
  // getting all form details
  
  get firstname(){
    // console.log(this.registrationform.get('firstname'))
    return this.registrationform.get('firstname');
  }
  get lastname(){
    return this.registrationform.get('lastname');
  }
  get age(){
    return this.registrationform.get('age');
  }
  get username(){
    return this.registrationform.get('username');
  }
  get email(){
    return this.registrationform.get('email');
  }
  get phonenumber()
  {
    return this.registrationform.get('phonenumber');
  }
  get additionaldata()
  {
    return this.registrationform.get('additionaldata');
  }
  onData(event:string){
    console.log(this.registrationform);
    this.childdata=event;

  }
  // adding to the data
  onSubmit(){
    if(this.registrationform.valid)
    {
      this.emitdata.emitter.emit({firstname:this.registrationform.controls['firstname'].value,lastname:this.registrationform.controls['lastname'].value,
    age:this.registrationform.controls['age'].value ,username:this.registrationform.controls['username'].value, email:this.registrationform.controls['email'].value,
    phonenumber:this.registrationform.controls['phonenumber'].value,additionaldata:this.registrationform.controls['additionaldata'].value,additionaldataInfo:this.childdata})
      this.router.navigate(['app-display'], { relativeTo: this.route });
    }
  }
}



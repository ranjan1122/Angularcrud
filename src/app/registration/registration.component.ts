import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserRegistartionService } from '../user-registartion.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  
  user:User=new User("","",0,"");
 
  message:any;
  constructor(private service:UserRegistartionService){


  }
  ngOnInit(){}

  public registerNow(){
   let resp=this.service.doRegistration(this.user);
   resp.subscribe((data)=>this.message=data);

   console.log('The Value isssssssssssss'+1);
  }
}

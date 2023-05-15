import { Component, OnInit } from '@angular/core';
import { UserRegistartionService } from '../user-registartion.service';
import {User} from '../user';


@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  users:any;
  email:string;
  user:User=new User("","",0,"");
  constructor(private service:UserRegistartionService) { }
  public delteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }

   public editUser(id:number){
    let resp= this.service.editUser(id);
    resp.subscribe((data)=>this.users=data);
   }
   
   public findUserByEmailId(){
     let resp= this.service.getUserByEmail(this.email);
     resp.subscribe((data)=>this.users=data);
    }
   
     ngOnInit() {
       let resp=this.service.getUsers();
       resp.subscribe((data)=>this.users=data);
     }
   

}

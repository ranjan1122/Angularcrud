import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserRegistartionService {
//user:any=null;
  constructor(private http:HttpClient) { }
  
  public doRegistration(user: User){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public getUserByEmail(email: string){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id: string | number){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
  public editUser(id: string | number){
    return this.http.delete("http://localhost:9090/edit/"+id);
  }
}

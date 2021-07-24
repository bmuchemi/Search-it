import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor() { }
  getData(){
    return this.http.get("https://api.github.com/users/"+ this.username +"?access_token="+environment.api_key);
  }
  
  getRepos(){
      return this.http.get("https://api.github.com/users/"+this.username+"/repos?access_token="+environment.api_key);
  }

  getName(username:string){
    this.username=username;
  }
}

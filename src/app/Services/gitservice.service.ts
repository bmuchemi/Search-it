import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GitserviceService {
  private username!: string;

  constructor(private http:HttpClient) {
    
  }

  getData(){
    return this.http.get("https://api.github.com/users/"+ this.username +"?Authorization HTTP="+environment.api_key);
  }
  
  getRepos(){
      return this.http.get("https://api.github.com/users/"+this.username+"/repos?Authorization HTTP="+environment.api_key);
  }

  getName(username:string){
    this.username=username;
  }

}
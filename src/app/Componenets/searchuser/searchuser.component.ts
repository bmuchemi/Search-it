
import { GitserviceService } from './../../Services/gitservice.service';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css'],
  providers:[GitserviceService]
})
export class SearchUserComponent implements OnInit {
  username!: string;
  data : any;
  work : any;

  display=true;
  hide=false;
  constructor(public getData:GitserviceService,){
  }

  getUserData(){
    this.getData.getName(this.username);
    
    this.getData.getData().subscribe(res => {
      console.log(res);
      this.data=res;
    }, error => {
      this.data=error;
      
    });

    this.getData.getRepos().subscribe(repo => {
      console.log(repo);
      this.work=repo;
    }, error => {
      this.work=null;
    });
  }

  viewRepositories(){
    this.display=!this.display;
    this.hide=!this.hide;
  }

  ngOnInit(): void {
    this.username = 'bmuchemi';
    this.getUserData()
  }

}
import { Component, OnInit } from '@angular/core';
import { GitserviceService } from 'src/app/Services/gitservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  }

}

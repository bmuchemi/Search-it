import { GitserviceService } from './../../Services/gitservice.service';
import { Component, OnInit } from '@angular/core';
import { Gituser } from 'src/app/Class/gituser';


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
  
})
export class SearchuserComponent implements OnInit {
   username!: string;

  constructor(public dataService:GitserviceService) { }

  getUserData() {
    this.dataService.getName(this.username);
    
    this.dataService.getData().subscribe(res => {
      console.log(res);
     
    }, error => {
      
      
    });

    this.dataService.getRepos().subscribe(repo => {
      console.log(repo);
      ;
    });
  }

  ngOnInit(): void {
}
}

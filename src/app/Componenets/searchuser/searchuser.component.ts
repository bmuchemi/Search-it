import { GitserviceService } from './../../Services/gitservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  constructor(public dataService:GitserviceService) { }

  getUserData() {
    this.dataService.getName(this.username);
    
    this.dataService.getData().subscribe(res => {
      console.log(res);
      this.profile=res;
    }, error => {
      this.profile=error;
      document.getElementById('name').style.color="red";
    });

    this.dataService.getRepos().subscribe(repo => {
      console.log(repo);
      this.work=repo;
    }, error => {
      this.work=null;
    });
  }

  ngOnInit(): void {
  

}
}

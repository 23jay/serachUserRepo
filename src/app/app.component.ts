import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchUserRepo';
  repoList: any;
  dummyData: [];
  searchDisable: any = false;
  constructor(private apiservice: ApiService) {
  }

  // Search  Repo List
  searchRepoList(evt: any) {
    this.repoList = this.dummyData.filter(
      (item: any) => item.name.toLowerCase().indexOf(evt.toLowerCase()) > -1);
    if (this.repoList.length == 0) {
      alert("There was no data found as you have entered");
    }

  }

  // API calling for Repo List
  userValueEntered(evt: any) {
    this.apiservice.getUserRepo(evt).subscribe((data: any) => {
      this.repoList = data;
      this.dummyData = data;
      this.searchDisable = true;
    });

  }
}

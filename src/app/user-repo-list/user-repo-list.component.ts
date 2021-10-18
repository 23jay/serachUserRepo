import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.css']
})
export class UserRepoListComponent implements OnInit {
  @Input() repoList: any;
  constructor() { }

  ngOnInit(): void {
  }

}

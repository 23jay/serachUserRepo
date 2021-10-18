import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-serach-box',
  templateUrl: './serach-box.component.html',
  styleUrls: ['./serach-box.component.css']
})
export class SerachBoxComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchByRepo(data: any) {
    this.searchValue.emit(data.value);
  }

}

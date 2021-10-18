import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-serach-box',
  templateUrl: './serach-box.component.html',
  styleUrls: ['./serach-box.component.css']
})
export class SerachBoxComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(data: any) {
    this.buttonClicked.emit(data.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  large: boolean = true 
  constructor() { }

  ngOnInit() {
  }

  isSelected() {
    if(this.large) {
      this.large = false 
    } else {
      this.large = true
    }
  }

}

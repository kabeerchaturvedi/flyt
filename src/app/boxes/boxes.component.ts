import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})



export class BoxesComponent {
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (this.selectedIndex !== -1) {
      switch (event.key.toLowerCase()) {
        case 'w': this.boxes[this.selectedIndex]["y"] = document.getElementById(this.boxes[this.selectedIndex]['id'].toString()).getBoundingClientRect().top - 1;
          break;
        case 'a': this.boxes[this.selectedIndex]["x"] = document.getElementById(this.boxes[this.selectedIndex]['id'].toString()).getBoundingClientRect().left - 1;
          break;
        case 's': this.boxes[this.selectedIndex]["y"] = document.getElementById(this.boxes[this.selectedIndex]['id'].toString()).getBoundingClientRect().top + 1;
          break;
        case 'd': this.boxes[this.selectedIndex]["x"] = document.getElementById(this.boxes[this.selectedIndex]['id'].toString()).getBoundingClientRect().left + 1;
          break;
        case 'delete': this.boxes.splice(this.selectedIndex,1)
        this.selectedIndex=-1;  
        break;
          
      }

    }
  }
  boxes: Object[] = [];
  _index: number;
  selectedIndex: number = -1;


  createBoxes(event) {
    this.boxes.push({ "x": 100, "y": 100, id: Date.now() });
  }
  setDiv(_index: number) {
    this.selectedIndex = _index;

  }



}

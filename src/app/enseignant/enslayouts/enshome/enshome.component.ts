import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enshome',
  templateUrl: './enshome.component.html',
  styleUrls: ['./enshome.component.css']
})
export class EnshomeComponent implements OnInit {

    sideBarOpen = true;
    constructor() { }

    ngOnInit(): void {
    }
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
}

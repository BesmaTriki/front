import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudhome',
  templateUrl: './etudhome.component.html',
  styleUrls: ['./etudhome.component.css']
})
export class EtudhomeComponent implements OnInit {

  
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

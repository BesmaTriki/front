import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enscourse',
  templateUrl: './enscourse.component.html',
  styleUrls: ['./enscourse.component.css']
})
export class EnscourseComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }
  urllink = './assets/image/form.txt';
  selectFiles(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }

}

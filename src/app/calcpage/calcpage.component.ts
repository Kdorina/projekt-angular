import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcpage',
  templateUrl: './calcpage.component.html',
  styleUrls: ['./calcpage.component.css']
})
export class CalcpageComponent implements OnInit {

   addBtn = document.querySelector('.addBtn');
   calcBtn = document.querySelector('.addBtn');

  add():void{
    this.addBtn?.addEventListener('click', ()=>{
      console.log('működik');
      // console.log(event);
      // console.log(event.target);
  });

  }

  calc():void{
    this.calcBtn?.addEventListener('click', ()=>{
      console.log('működik');

  });
}

  constructor() {
   }

  ngOnInit(): void {
  }

}

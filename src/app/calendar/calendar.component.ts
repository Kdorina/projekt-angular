import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

constructor(){
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth(); 

}
months = [ "Január" , "Február", "Március", 
"Április", "Május","Június", 
"Július", "Augusztus", "Szeptember",
"Október", "November", "December"];

public renderCalendar = (currMonth:any, currYear:any, currentDate:any, daysTag:any, date:any) => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth ).getDay();
  let lastDateOfLastfMonth = new Date(currYear, currMonth, 0).getDate();
  // console.log(lastDateOfMonth);
  let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive" >${lastDateOfLastfMonth - i + 1}</li>`;
        
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {

        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "";

        liTag += `<li class="${isToday}">${i}</li>`;
        
    }

    for (let i = lastDayOfMonth; i < 6 ; i++) {
       liTag += `<li class="inactive" >${ i - lastDayOfMonth + 1}</li>`;
        
    }

    currentDate.innerText = `${this.months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}


  ngOnInit(): void {
   
  }

  next(currMonth:any, currYear:any, date:any){
    currMonth === "prev" ? 
    currMonth -1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {

        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }else{
        date = new Date();
    }


  }
  prev(){

  }
  date(){
    console.log();

  }
}

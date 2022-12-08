import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private subjectService: SubjectService, private router: Router) { }

  subjects: any;

  ngOnInit(): void {
    this.showSubjects();
  }

  showSubjects(){
    this.subjects = this.subjectService.listSubject().subscribe(subject=>{
      this.subjects = subject;
      console.log(this.subjects);
    });
  }
}

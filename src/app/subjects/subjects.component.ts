import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  subjects: any;

  ngOnInit(): void {
    this.showSubjects();
  }

  showSubjects(){
    this.subjects =
    this.subjectService.listSubject().subscribe(subject=>{
      this.subjects = subject;
      console.log(this.subjects);
    });
  }
}

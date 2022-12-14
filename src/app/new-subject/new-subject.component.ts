import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.css']
})
export class NewSubjectComponent implements OnInit {

  constructor( private subjectService: SubjectService) { }
  subjects: any;
  ngOnInit(): void {
  }

  add(Newsubject:string){
    this.subjects = {
      'subject': Newsubject,
    };

    // console.log(this.subjects);

    this.subjectService.add(this.subjects as string).subscribe(subject=>{
      this.subjects = subject
    });
    console.log(this.subjects);
  }
}

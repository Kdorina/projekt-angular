import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

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

  delete(id:any){
    this.subjectService.delete(id).subscribe(
      res => {
            // this.subjects = this.subjects.filter((a:any)=> a.id == id);
            console.log(res);
      }
    );
    // this.router.navigateByUrl('/');
  }
}

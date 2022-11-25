import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SubjectService } from '../service/subject.service';


@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  subjectId: any;
  subject: any;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private subjectService: SubjectService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.subjectId = Number(routeParams.get('subjectId'));
    console.log(this.subjectId);

    this.subjectService.find(this.subjectId).subscribe((data:any)=> {
      this.subject = data;
      console.log(this.subject);
    });
  }
  
  update(subject: string){
    this.subjectService.update(this.subjectId, this.subject).subscribe((res)=>{
      console.log(' updated successfully!');
      this.router.navigateByUrl('/');
      
    });

  }

}

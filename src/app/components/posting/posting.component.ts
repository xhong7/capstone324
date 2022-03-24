import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  @Input() post: any;
  manager: any;
  applicant: any;
  company:any;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post);

    this.manager = false;
    this.applicant = false;


    if(this.data.company_id)
    {   
      this.manager = true;
      this.company=this.data.company.company_name;
      
    }
    else
    {
      this.applicant = true;
      ;
    }
  }
  editClicked()
  {
    this.data.post=this.post;
    
    console.log(this.post);
    this.router.navigate(['/jobform']);
  }

  deleteClicked()
  {
    //add logic here to delete the job posting
    this.data.delete_job(this.post._id).subscribe(info =>
      {
       console.log(info); 
      })
    this.router.navigate(['/company']);
  }

  applyClicked()
  {
    //add logic here for an applicant to apply
  }

  viewClicked()
  {
    this.data.post=this.post;
    this.router.navigate(['/jobdetails']);
  }

}

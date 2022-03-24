import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  manager: any;
  applicant: any;
  post:any;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.manager = false;
    this.applicant = false;

this.post=this.data.post;
    if(this.data.company_id)
    {   
      this.manager = true;
      console.log("manager view");
      console.log(this.post);
    }
    else
    {
      this.applicant = true;
      
      console.log("applicant view");
      console.log(this.post);
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
}

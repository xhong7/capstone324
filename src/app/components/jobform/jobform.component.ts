import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent implements OnInit {
  fieldDropdown = [
    {name: "IT", value: "IT"},
    {name: "Business", value: "Business"},
    {name: "Health", value: "Health"},
    {name: "Hospitality", value: "Hospitality"},
    {name: "Engineering", value: "Engineering"},
    {name: "Arts", value: "Arts"},
    {name: "Education", value: "Education"},
    {name: "Other", value: "Other"}
  ]
  theField: String;

  public jobInfo:any={
    
    job_desc:'',
    job_skills:'',
    job_pay:'',
    job_title:'',
    job_categories:''
  }
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    if(this.data.post){
      this.jobInfo.job_desc=this.data.post.job_desc;
      this.jobInfo.job_skills=this.data.post.job_skills[0].skill_desc;
      this.jobInfo.job_pay= this.data.post.job_pay;
      this.jobInfo.job_title=this.data.post.job_title;
      this.theField=this.data.post.job_category;
      this.data.job_id=this.data.post._id;
    }
  }

  doSubmit()
  {
    let skill=this.jobInfo.job_skills;
    
    let job_info={
job_desc:this.jobInfo.job_desc,
job_skills:[{'skill_desc':skill}],
job_pay:this.jobInfo.job_pay,
job_title:this.jobInfo.job_title,
job_category:this.theField

    }
    console.log(job_info)
    if(!this.data.post){
    this.data.add_jobs(job_info).subscribe(info=>{
      console.log(info);
      this.router.navigate(['/home']);

    })}
    else{
this.data.edit_job(job_info).subscribe(info=>{
  console.log(info);
  this.router.navigate(['/home']);
})
    }
    
  }
}

import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})
export class ProfileformComponent implements OnInit {
  public profileInfo:any={
    
    first_name:'',
    last_name:'',
    
    
    applicant_education: '',
    applicant_interests: '',
    applicant_hobbies: '',
    work_fields: [],
    city: '',
    country: '',
  }
  querySub:any;
  educations = 
  [
    { name: "None", value: "none"},
    { name: "Highschool", value: "highschool"},
    { name: "Diploma", value: "diploma"},
    { name: "Degree", value: "degree"},
    { name: "Masters", value: "masters"},
    { name: "PhD", value: "phd"}
  ]
  selectedEducation: String;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.data.profile){
    
      this.profileInfo.first_name=this.data.profile.first_name;
      this.profileInfo.last_name=this.data.profile.last_name;
     
      

      
      this.selectedEducation=this.data.profile.applicant_education[0].Level;
      console.log(this.data.profile.applicant_education[0].Level);
      this.profileInfo.applicant_interests=this.data.profile.applicant_interests[0].interest;
      this.profileInfo.applicant_hobbies=this.data.profile.applicant_hobbies[0].hobby;
      this.profileInfo.work_fields=this.data.profile.work_fields[0].field;
      this.profileInfo.city=this.data.profile.city;
      this.profileInfo.country=this.data.profile.country;




    }
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  doSubmit(){
    //this.profileInfo.education=this.selectedEducation
    if (this.selectedEducation)
    {
      this.profileInfo.applicant_education = [ {
        School: 'unknown',
        Level: this.selectedEducation,
        Major: 'unknown',
        From: 'unknown',
        To: 'unknown'
    }];
    }
    this.profileInfo.applicant_hobbies=[{hobby:this.profileInfo.applicant_hobbies}];
    this.profileInfo.applicant_interests=[{interest:this.profileInfo.applicant_interests}];
    this.profileInfo.work_fields=[{field:this.profileInfo.work_fields}];
    
   
    console.log(this.profileInfo);
    this.querySub=this.data.register_profile_form(this.profileInfo).subscribe(info => 
      {
        console.log(info);
        this.data.profile_id=info._id;
        this.router.navigate(['/profile']);
      });
    
  }
}

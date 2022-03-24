import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  theProfile: any={
    user_name: '',
    first_name: '',
    last_name: '',
    email_address: '',
    profile_pic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    resume: '',
    applicant_education: '',
    applicant_interests: '',
    applicant_hobbies: '',
    work_fields: '',
    city: '',
    country: '',
  };

  theEmail: any;
  resumeUrl: any;
  theDocument: any;
  thePicId: any;
  thePic: any;

  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.data.profile_id){
    this.data.get_profile_by_id(this.data.userId).subscribe(info =>
      {
        console.log(info);
        
        if(info){
          this.theProfile = info.profile;
          this.data.profile=info.profile;
          this.theDocument = info.profile.profile_document;
          if (info.profile.profile_pic)
          {
            this.thePicId = info.profile.profile_pic;
            this.thePic = "https://g13jobapiv2.herokuapp.com/api/image/applicant/" + this.data.userId + "/" + this.thePicId;
          }

        }
        this.theEmail = this.data.email_address;
        console.log(this.theProfile);
      });}
  }

  //need to populate form page when user clicks edit

  downloadResume()
  {
    this.resumeUrl = "https://g13jobapi.herokuapp.com/api/document/applicant";

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.resumeUrl+'/'+this.data.userId+'/'+this.theDocument);
    link.setAttribute('download', ``);
    document.body.appendChild(link);
    link.click();
    link.remove();
    console.log("https://g13jobapi.herokuapp.com/api/profile/resume/api/profile/resume/1645214504844.pdf");
  }

  uploadResume()
  {
    this.router.navigate(['/resume']); //need to add applicant id here to the url
  }

  uploadPic()
  {
    this.router.navigate(['/picform']); //need to add applicant id here to the url
  }
}

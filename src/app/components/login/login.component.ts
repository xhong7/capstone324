import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import jwt_decode from 'jwt-decode'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public UserLogin:any={
  email_address:'',
  password:''
}
querySub:any;
  constructor(private data:SubmitAppService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  doSubmit(){
    console.log(this.UserLogin);
    this.querySub=this.data.submit_app_form(this.UserLogin).subscribe((info)=>{
      console.log("login test");
      console.log(info);
      let user_id=jwt_decode(info.access_token);
      console.log(user_id);
      this.data.get_user(user_id['id']).subscribe((user)=>{
        console.log(user);
        if(user){
          if(user.Applicant.is_Applicant){
            this.data.role='applicant';
          }
          if(user.Manager.is_Manager){
            this.data.role='manager';
          }
          if(user.Recruiter.is_Recruiter){
            this.data.role='recruiter';
          }
          console.log('the user has logged in');
          this.data.userId=user._id;
          console.log('this userID '+user._id);
          this.data.email_address=user.email_address;
          this.data.company_id=user.Manager.Company;
          this.data.profile_id=user.Applicant.Profile;
          console.log(this.data.profile_id);
          

          this.router.navigate(['/home']);
        }
      });

//       console.log(user);
//       if(user)
//       {
//       if(user['is_Applicant']){
// this.data.role='applicant';
//       }
//       if(user['is_Manager']){
//         this.data.role='manager';
//       }
//       if(user['is_Recruiter']){
//         this.data.role='recruiter';
//       }
//       console.log("the user has logged in");
//       //bring the users to the new page
//         this.data.userId=user['_id'];
        
//         console.log('this userid'+this.data.userId);
//         this.data.email_address=this.UserLogin.email_address;
//         this.data.company_id=user['company_id'];
//         this.data.profile_id=user['profile_id'];
        
//         this.router.navigate(['/home']);
//     }
     
        
      
     
    });
    
  }

}

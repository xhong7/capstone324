import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_path = 'https://g13jobapiv2.herokuapp.com/api/auth/login';
const api_path_user='https://g13jobapiv2.herokuapp.com/api/users/' //+id
const api_path2='https://g13jobapiv2.herokuapp.com/api/auth/register';
let api_path3 = 'https://g13jobapiv2.herokuapp.com/api/company/register_company/';// Register company as a manager of the company
const api_path4 = 'https://g13jobapiv2.herokuapp.com/api/profile/create_applicant/';
const api_path5 = 'https://g13jobapiv2.herokuapp.com/api/profile/620ffb284d3dbfcd53d8d074'; //test profile
let api_path6 = 'https://g13jobapiv2.herokuapp.com/api/profile/applicant/' //get profile, need to append profile id at the end
const api_path7 = 'https://secret-castle-85858.herokuapp.com/api/company/620c5e2956556e6985a37cbc'; //test company
let api_path8 = 'https://g13jobapiv2.herokuapp.com/api/company/' //get company, need to append company id at the end
let api_path9 = 'https://g13jobapiv2.herokuapp.com/api/document/applicant/upload/' //upload resume
let api_path10 = 'https://g13jobapiv2.herokuapp.com/api/document/company/upload/' //upload logo
let api_path11='https://g13jobapiv2.herokuapp.com/api/company/register_manager/' // Register a manager for the company as a manager
let api_path12 = 'https://g13jobapiv2.herokuapp.com/api/document/company/' //get logo
let api_path13 = 'https://g13jobapiv2.herokuapp.com/api/image/applicant/upload/'
let api_path14 = 'https://g13jobapiv2.herokuapp.com/api/company/edit_company/' //manager edits page
let api_path15='https://g13jobapiv2.herokuapp.com/api/job'
let api_path16='https://g13jobapiv2.herokuapp.com/api/company/addjob/'// Add a job as a manager of the company
let api_path17='https://g13jobapiv2.herokuapp.com/api/company/getjobs/'//get jobs under a certain company
let api_path18='https://g13jobapiv2.herokuapp.com/api/company/edit_job/' //edit a job
let api_path19='https://g13jobapiv2.herokuapp.com/api/company/deletejob/' //delete a job
let api_path20='https://g13jobapiv2.herokuapp.com/api/job/filter_job'

@Injectable({
  providedIn: 'root'
})
export class SubmitAppService {
email_address:String;
role:String;
userId:String;
company_id:String;
company:any;
profile_id:String;
profile:any;
newManager:String;
post:any;
job_id:any;
  constructor(private http: HttpClient){ }

  get_user(id:any):Observable<any>{
    return this.http.get<any>(api_path_user+id);
  }

  submit_app_form(data:any) : Observable<any>
  {
    return this.http.post<any>(api_path,data);
  }
  register_app_form(data:any):Observable<any>{
    return this.http.post<any>(api_path2,data);
  }
  
  register_company_form(data:any):Observable<any>{
    return this.http.post<any>(api_path3+this.userId,data);
  }

  register_profile_form(data:any):Observable<any>{
    return this.http.post<any>(api_path4+this.userId,data);
  }

  get_profile(): Observable<any>
  {
    return this.http.get<any>(api_path5);
  }

  get_profile_by_id(id: String): Observable<any>
  {
    
    
    return this.http.get<any>(api_path6+id);
  }

  get_company(): Observable<any>
  {
    return this.http.get<any>(api_path7);
  }

  get_company_by_id(id: String): Observable<any>
  {
    
    return this.http.get<any>(api_path8+id);
  }

  upload_resume(data: any):Observable<any>{
    return this.http.post<any>(api_path9+this.userId,data);
  }

  upload_logo(data: any):Observable<any>{
    return this.http.post<any>(api_path10+this.userId+'/'+this.company_id,data);
  }

  get_logo(fileId: String): Observable<any>
  {
    return this.http.get<any>(api_path12+this.company_id+'/'+fileId);
  }

  upload_pic(data: any):Observable<any>{
    return this.http.post<any>(api_path13+this.userId,data);
  }

  add_manager(data:any):Observable<any>{
    return  this.http.patch<any>(api_path11+this.userId+'/'+this.company_id+'/'+data,this.newManager);
  }

  update_company_page(data:any):Observable<any>{
    return  this.http.patch<any>(api_path14+this.userId+'/'+this.company_id, data);
  }
  get_jobs():Observable<any>{
    return this.http.get<any>(api_path15);
  }
  add_jobs(data:any):Observable<any>{
    return  this.http.patch<any>(api_path16+this.userId+'/'+this.company_id,data);
  }
  get_jobsforCompany():Observable<any>{
    return this.http.get<any>(api_path17+this.company_id);
  }

  edit_job(data:any):Observable<any>{
    return this.http.patch<any>(api_path18+this.userId+'/'+this.company_id+'/'+this.job_id,data);
  }

  delete_job(jobID: any):Observable<any>{
    return this.http.delete<any>(api_path19+this.userId+'/'+this.company_id+'/'+jobID); //:manager_id/:company_id/:job_id
  }
  get_jobofCondition(params:any):Observable<any>{
    return this.http.get<any>(api_path20,{params});
  }
}

var express = require("express");
const mongoose = require("mongoose");
var app = express();
var Schema = mongoose.Schema;

//Uri to connect to the database.
const uri = "mongodb+srv://dbUser:dbUserPassword@jobrecruitmentdb.5ebgm.mongodb.net/JobRecruitment?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Connect to the DB.
mongoose.connect("mongodb+srv://dbUser:dbUserPassword@jobrecruitmentdb.5ebgm.mongodb.net/JobRecruitment?retryWrites=true&w=majority");

//Job listing schema. Includes job title, job field, company, date posted, description, location, and job type (ex. full-time or part-time).
var jobListingSchema = new Schema({
    "jobTitle": String,
    "jobField": String,
    "company": String,
    "datePosted": Date,
    "description": String,
    "location": String,
    "jobType": String,
    "salaryEstimate": Number
});

//Company schema. Includes company name, description of the company, rating out of 10, and their current job listings.
var companySchema = new Schema({
    "companyName":
    {
        "type": String,
        "unique": true
    },
    "companyDescription": String,
    "rating": Number
});

var applicationSchema = new Schema({
    "jobListingId": Number,
    "applicantUsername": String,
    "applicantEmail": String,
    "message": String
})

//Applicant schema. Includes a unique username, password, first name, last name, description in their profile, unique email, and list of applications.
var applicantSchema = new Schema({
    "username": 
    {
        "type": String,
        "unique": true
    },
    "password": String,
    "firstName": String,
    "lastName": String,
    "description": String,
    "email":
    {
        "type": String,
        "unique": true
    }
});

//Recruiter schema. Includes a unique username, password, first name, last name, unique email, whether the recruiter is a manager,
//employer, and a list of applicants.
var recruiterSchema = new Schema({
    "username": 
    {
        "type": String,
        "unique": true
    },
    "password": String,
    "firstName": String,
    "lastName": String,
    "email":
    {
        "type": String,
        "unique": true
    },
    "isManager": Boolean,
    "employer": String
    //"applicants": [applicantSchema]
});

var profileSchema = new Schema({
  "username": 
  {
      "type": String,
      "unique": true
  },
  "picture":
  {
    "type": String
  },
  "firstName": String,
  "lastName": String,
  "email":
  {
      "type": String,
      "unique": true
  },
  "phone": String,
  "education": String,
  "field": String,
  "school": String,
  "country": String,
  "city": String,
  "resume": String
});

var companyPageSchema = new Schema({
  "companyName": String,
  "industry": String,
  "address": String,
  "contact": String,
  "website": String,
  "officeHours": String,
  "description": String
});

let JobListing;
let Company;
let Application;
let Applicant;
let Recruiter;
let ApplicantProfile; //maybe needed later
let CompanyPage; //maybe needed later

module.exports = 
{
    initialize: function()
    {
        return new Promise(function(resolve, reject)
        {
            let db = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(error){
                if(error)
                {
                    reject(error);
                }
                else
                {
                    console.log("connection successful");
                    //Register the models using the schemas.
                    JobListing = mongoose.model("JobListings", jobListingSchema);
                    Company = mongoose.model("Companies", companySchema);
                    Application = mongoose.model("Applications", applicationSchema);
                    Applicant = mongoose.model("Applicants", applicantSchema);
                    Recruiter = mongoose.model("Recruiters", recruiterSchema);
                    ApplicantProfile = mongoose.model("ApplicantProfiles", profileSchema);
                    CompanyPage = mongoose.model("CompanyPages", companyPageSchema); 
                    resolve();
                }
            }); 
        });
    },
    addApplicant: function(userData)
    {

      return new Promise(function(resolve, reject)
      {
        let theApplicant = new Applicant(userData);
        theApplicant.save((err) =>
        {
          if (err)
          {
            reject(err);
          }
          else
          {
            resolve();
          }
        })
      });
    },
    getApplicant: function(userData)
    {
      return new Promise(function(resolve, reject)
      {
        Applicant.findOne({ username: "TestUsername"}) //should be userData.username, but testing for now.
        .exec()
        .then((applicant) =>
        {
          //do stuff with data.
          console.log(applicant);
        })
      });
    },
    addApplicantProfile: function(applicantData)
    {

      return new Promise(function(resolve, reject)
      {
        let theProfile = new ApplicantProfile(applicantData);
        var profile = new ApplicantProfile({
          username: "username1",
          picture: "picture.jpg",
          firstName: "John",
          lastName: "Smith",
          email: "email@gmail.com",
          phone: "1234567890",
          education: "College",
          field: "IT",
          school: "Seneca",
          country: "Canada",
          city: "Toronto",
          resume: "Test Resume"
        });
        profile.save((err) =>
        {
          if (err)
          {
            reject(err);
          }
          else
          {
            resolve();
          }
        })
      });
    },
    addCompanyPage: function(companyData)
    {
      return new Promise(function(resolve, reject)
      {
        let thePage = new CompanyPage(companyData);
        var profile = new CompanyPage({
          companyName: "company1",
          industry: "IT",
          address: "123 Main Street",
          contact: "company@gmail.com",
          website: "company.com",
          officeHours: "12-5",
          description: "College"
        });
        profile.save((err) =>
        {
          if (err)
          {
            reject(err);
          }
          else
          {
            resolve();
          }
        })
      });
    },
    getApplicantProfile: function(applicantData)
    {
      return new Promise(function(resolve, reject)
      {
        ApplicantProfile.findOne({ username: "TestUsername"}) //should be applicantData.username, but testing for now.
        .exec()
        .then((applicantProfile) =>
        {
          //do stuff with data.
          console.log(applicantProfile);
        })
      });
    },
    getCompanyPage: function(companyData)
    {
      return new Promise(function(resolve, reject)
      {
        ApplicantProfile.findOne({ username: "TestUsername"}) //should be companyData.username, but testing for now.
        .exec()
        .then((applicantProfile) =>
        {
          //do stuff with data.
          console.log(applicantProfile);
        })
      });
    },
}
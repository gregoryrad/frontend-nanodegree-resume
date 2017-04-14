// var name = "Gregory Radcliffe";
// var role = "Front End Developer";

var bio = {
    "name": "Gregory Radcliffe",
    "role": "Front End Web Developer",
    "contactInfo": {
        "mobile": "(206)920-8376",
        "email": "mailto:greg.ray.radcliffe@gmail.com",
        "twitter": "https://twitter.com/greg_radcliffe",
        "github": "https://github.com/gregoryrad",
        "location": "Portland, OR"},
    "welcomeMessage": "Hi there. This is my welcome message. Aenean ac ullamcorper arcu. In sed fermentum purus. Ut aliquam tempor odio, non commodo turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat facilisis ultrices. Donec et diam lobortis, venenatis dui id, viverra urna. Aliquam sed magna diam. Maecenas sed nisi ac sapien condimentum dignissim eget nec leo. Nunc consectetur arcu vitae elit condimentum sollicitudin. Phasellus eu metus ex.",
    "skills": [
        "PhotoShop", "Illustrator", "HTML", "CSS", "Responsive Design"
    ],
    "bioPic": "images/GregoryR_profilePic.jpeg"
}

var work = {
    "workTitle": "Principal",
    "workEmployer": "Creative Hubbub",
    "workDates": "Apr. 2000 - Present",
    "workLocation": "Seattle",
    "workDescription": "Donec non nibh ullamcorper, faucibus orci quis, pharetra urna. Sed imperdiet turpis gravida quam vestibulum scelerisque. Nam rhoncus nulla vel sem rutrum, ut porttitor justo tempus. Integer et arcu id risus commodo fringilla"
}

var education = {
    "schoolName": "Edmonds Community College",
    "schoolDegree": "Certificate in Web App Development",
    "schoolDates": "Sep. 2014 - Jun. 2016",
    "schoolCity": "Lynnwood, WA"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var formattedPicURL = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.workTitle);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.workEmployer);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.workDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.workLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.workDescription);
var formattedSchoolName = HTMLschoolName.replace("%data%", education["schoolName"]);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education["schoolDegree"]);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["schoolDates"]);
var formattedSchoolCity = HTMLschoolLocation.replace("%data%", work["schoolDates"]);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedPicURL);
$("#topContacts").append(formattedWelcomeMsg);
$("#topContacts").append(formattedSkills);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolCity);



$("#workExperience").append(formattedWorkTitle);

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


$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedPicURL);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedTwitter);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
